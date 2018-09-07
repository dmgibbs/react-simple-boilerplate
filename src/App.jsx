import React, {Component} from 'react';
import Navigation from './Navigation.jsx';
import ChatBar  from './ChatBar.jsx';
import Message from   './Message.jsx';
import MessageList from   './MessageList.jsx';


const data = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
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

  numUsers = () =>{
    this.setState({connectedUsers: connectedUsers++})
  }

  updateMsgContainer = (event) => {
    
    const oldmsgs = this.state.messages;
    // Send message to the server using websocket 
    //let msgObject = value;
    // Test if the event class chosen is the username
    if (event.target.className==="chatbar-username"  && event.key==="Enter") {  
      let chatName = event.target.value;
      console.log(" called chatname with new name of :", chatName);
      this.setState({currentUser:{name: chatName} , messageType:'postNotification'});

      console.log(" New notification for username change ", this.state.messageType);
      let newUsermsg = `${this.state.currentUser.name} has been changed to ${chatName}`;

      /*-----------------------------------*/
      const oldmsgs = this.state.messages;

      // Update the message list with the notification thing.. 
      this.setState({messages: newMsgs})

      // package the new message to send it to the server
      let packagedMsg =   JSON.stringify (
        { message : newUsermsg, 
          currentUser: this.state.currentUser.name,
          messageType: 'postNotification'
        });
      
      this.socket.send(packagedMsg);
      // Receive back the message from the server with a new uuid
      this.socket.onmessage = (event) => {
        console.log(event);
        // if message relates to connection OPEN/CLOSE
        // got user count info... do something
        // else
          const messageFromServer = JSON.parse(event.data)
       
      }
      
      const newMsgs = [...oldmsgs, {
        username:this.state.currentUser.name,
        content:newUsermsg,
        messageType:'incomingNotification'
        } ];
            
        this.setState({messages: newMsgs})  
      /*-----------------------------------*/  

    }
// Now check if the event is the message field
    else  if (event.target.className==="chatbar-message" && event.key==="Enter") { 

      let chatmessage= event.target.value
      // console.log("Message retrieved",chatmessage)
      const oldmsgs = this.state.messages;
            
      event.target.value = '';
      
      // Send message to the server using websocket 
 
       let packagedMsg =   JSON.stringify (
       { message : chatmessage, 
         currentUser: this.state.currentUser.name,
         messageType: 'postMessage'
       });

       this.socket.send(packagedMsg);
         // Receive back the message from the server with a new uuid
       this.socket.onmessage = (event) => {
         const messageFromServer = JSON.parse(event.data)
        
         console.log('Got this from server: ',messageFromServer  );
         
         const newMsgs = [...oldmsgs, {
          username:messageFromServer.username,
          id: messageFromServer.id,
          content:messageFromServer.message,
          messageType: 'incomingMessage'
        } ];

        this.setState ({messages: newMsgs, messageType: "postMessage"}); 
        console.log("Now messages should store: ", newMsgs);
      }
  }
}

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
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
   

  }
  
  render() {
    const user = data.currentUser;
    console.log(" Message List has:",this.state.messages)
    return (
      <div>
        <Navigation />
        <MessageList messages = {this.state.messages}/>
        <ChatBar updateMsgContainer = {this.updateMsgContainer} 
         currentUser = {this.state.currentUser.name}/>
         <numClients />
      </div>
    );
  }
}
export default App;
