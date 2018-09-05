import React, {Component} from 'react';
import Navigation from './Navigation.jsx';
import ChatBar  from './ChatBar.jsx';
import Message from   './Message.jsx';
import MessageList from   './MessageList.jsx';

const data = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    {
      id: 1,
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      id:2,
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
      currentUser: data.currentUser.name ,  
      messages: data.messages
  
    }
  }

  updateMsgContainer = (value) => {
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
    }, 3000);
  }

  render() {
    return (
      <div>
        <Navigation />
        <MessageList messages = {this.state.messages}/>
        <ChatBar />
      </div >
    );
  }
}
export default App;


// <div className="message">
//   <span className="message-username">Anonymous1</span>
//   <span className="message-content">I won't be impressed with technology until I can download food.</span>
// </div>
