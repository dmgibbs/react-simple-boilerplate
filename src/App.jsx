import React, {Component} from 'react';
import Navigation from './Navigation.jsx';
import ChatBar  from './ChatBar.jsx';
import Message from   './Message.jsx';
import MessageList from   './MessageList.jsx';

const data = {
   // optional. if currentUser is not defined, it means the user is Anonymous
  currentUser: {name: "Bob"},
  messages: [
    { id:1,
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    { id:2,
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]
};

class App extends Component {
  constructor(props) {
    super(props);

    // Setting up the initial state of the app with some basic data from an array
    this.state = 
    {
      currentUser: data.currentUser ,  
      messages: data.messages,
      messageType:"",
      connectedUsers:0
    }
  }

   updateMsgContainer = (event) => {
    
    const oldmsgs = this.state.messages;
    // Send message to the server using websocket 
    // Test if the event class chosen is the username

    if (event.target.className==="chatbar-username"  && event.key==="Enter") {  
      let chatName = event.target.value;
      this.setState({
        currentUser: {name: chatName} ,
        messageType:'postNotification'});

      let newUsermsg = `${this.state.currentUser.name} has been changed to ${chatName}`;

      /*------------------------------------------------------------------*/
      const oldmsgs = this.state.messages;

      // Update the message list with the notification thing.. 
      // package the new message to send it to the server

      let packagedMsg =   JSON.stringify (
        { message : newUsermsg, 
          currentUser: this.state.currentUser.name,
          messageType: 'postNotification'
        });
      this.socket.send(packagedMsg);
     }
// Now check if the event is the message field
    else  if (event.target.className==="chatbar-message" && event.key==="Enter") { 

      let chatmessage= event.target.value
      const oldmsgs = this.state.messages;
      event.target.value = '';
      
      // Send message to the server using websocket 
 
       let packagedMsg =   JSON.stringify (
       { message : chatmessage, 
         currentUser: this.state.currentUser.name,
         messageType: 'postMessage'
       });
       this.socket.send(packagedMsg);
  }
}

  componentDidMount() {
    setTimeout(() => {
      
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 1000);
    
    // Testing the type of message sent from the server */
    /* When there is a new connection , create one for each user that connects */

    const clientConnection = new WebSocket('ws://localhost:3001');
    this.socket = clientConnection;
    
    // Process messages from the server. Update the message list
    this.socket.onmessage = (event) => {
      const messageFromServer = JSON.parse(event.data);
    // Check the message type
      if (messageFromServer.type === "userconnections"){
        this.setState({connectedUsers: messageFromServer.users});
        console.log(`current number of users, ${this.state.connectedUsers}`);
      } else {
          const oldmsgs = this.state.messages;
      //  build the message , and store the message in the existing message list
          const newMsgs = [...oldmsgs, {
          username:messageFromServer.username,
          id: messageFromServer.id,
          content:messageFromServer.message,
          messageType: messageFromServer.messageType
      } ];
      // Update the message state variable with the correct message type
      this.setState ({messages: newMsgs, messageType: "postMessage"}); 
    }
  }
}
  
  render() {
    const user = data.currentUser;
    console.log(" Message List has:",this.state.messages)
    return (
      <div>
        <Navigation users ={this.state.connectedUsers} />
        <MessageList messages = {this.state.messages}/>
        <ChatBar updateMsgContainer = {this.updateMsgContainer} 
         currentUser = {this.state.currentUser.name}/>
      </div>
    );
  }
}
export default App;