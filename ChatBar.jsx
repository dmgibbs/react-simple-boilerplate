import React, {Component} from 'react';

class ChatBar  extends React.Component {
  render() {
    return (
      <nav className="ChatBar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </nav>
    );
  }
}


export default ChatBar;