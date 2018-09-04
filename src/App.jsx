import React, {Component} from 'react';
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
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <main className="messages">
          <div className="message">
            <span className="message-username">Anonymous1</span>
            <span className="message-content">I won't be impressed with technology until I can download food.</span>
          </div>
          <div className="message system">
            Anonymous1 changed their name to nomnom.
          </div>
        </main>
        <footer className="chatbar">
          <input className="chatbar-username" placeholder="Your Name (Optional)" />
          <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
        </footer>
      </div>
    );
  }
}
export default App;
