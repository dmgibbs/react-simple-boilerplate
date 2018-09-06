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
      messages: data.messages
    }
  }

  updateMsgContainer = (event) => {
    // if (value){
      const oldmsgs = this.state.messages;
      
     // Send message to the server using websocket 
      //let msgObject = value;
    // Test if the event class chosen is the username
    if (event.target.className==="chatbar-username"  && event.key==="Enter") {  
      console.log("Got here into updatemsgs - chatbar: username.. ")
      let chatName = event.target.value;
      console.log("Message retrieved",chatName)
      this.setState({currentUser:{name: chatName}})
    }
// Now check if the event is the message field
    else  if (event.target.className==="chatbar-message" && event.key==="Enter") { 
      console.log("Got here into updatemsgs - chatbar: message section. ")
      let chatmessage= event.target.value
      console.log("Message retrieved",chatmessage)

      const oldmsgs = this.state.messages;
    
      // Send message to the server using websocket 
       //let msgObject = value;
 
       let packagedMsg =   JSON.stringify (
       { message : chatmessage, 
         currentUser: this.state.currentUser.name
       });
       this.socket.send(packagedMsg);
         // Receive back the message from the server with a new uuid
       this.socket.onmessage = (event) => {
         const messageFromServer = JSON.parse(event.data)
         console.log('Got this from server: ',messageFromServer  );
         const newMsgs = [...oldmsgs, {
           username:this.state.currentUser.name,
           content:chatmessage
           } ];
         this.setState ({messages: newMsgs})

      event.target.value = '';
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
    
    /* When there is a new connection , create one for each user that connects */

    const clientConnection = new WebSocket('ws://localhost:3001');
    this.socket = clientConnection;



  }

  handleNameChange = (event) => {
    if (event.charCode === 13){
      console.log("Username was : ", this.props.username);
      console.log("new name is:",event.target.value);
    }
  }

  render() {
    const user = data.currentUser;

    return (
      <div>
        <Navigation />
        <MessageList messages = {this.state.messages}/>
        <ChatBar updateMsgContainer = {this.updateMsgContainer} 
         currentUser = {this.state.currentUser.name}/>
      </div>
    );
  }
}
export default App;


// <div className="message">
//   <span className="message-username">Anonymous1</span>
//   <span className="message-content">I won't be impressed with technology until I can download food.</span>
// </div>
