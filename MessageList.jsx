import React, {Component} from 'react';
import message from './Message.jsx'

class MessageList  extends React.Component {
// map each prop to 
  render() {
    return (
    <main className="messages">
      <Message/>
    </main>
    );
  }
}

export default  MessageList;