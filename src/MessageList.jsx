import React, {Component} from 'react';
import Message from './Message.jsx';


class MessageList  extends React.Component {
  render() {
    
    const msgObject = this.props.messages.map( (message,index) =>  <Message key = {index} message ={message.content} username = {message.username} /> ); 

    return (
    <main className="messages">
      {msgObject}
    </main>
    );
  }
}
// return (
//   <main className="messages">
//     <Message />
//   </main>
//   );
export default  MessageList;