import React, {Component} from 'react';
import Navigation from './Navigation.jsx';
import ChatBar  from './ChatBar.jsx';
import Message from   './Message.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    // Setting up the initial state of the app
    // Since we're going to be showing a list of posts
    // set the initial posts value to an empty array.
    this.state = 
    {
      currentUser: {name:""}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          username: "",
          content: "",
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <Navigation />
        <main className="messages">
          <Message/>
          <div className="message system">
            Anonymous1 changed their name to nomnom.
          </div>
        </main>
        <ChatBar />
        
      </div>
    );
  }
}
export default App;
// <div className="message">
//   <span className="message-username">Anonymous1</span>
//   <span className="message-content">I won't be impressed with technology until I can download food.</span>
// </div>
