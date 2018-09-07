import React, {Component} from 'react';
import Message from './Message.jsx';


class MessageList  extends React.Component {
  render() {
    console.log(" In message list, the prop stores: ", this.props);
    const msgObject = this.props.messages.map( (message,index) =>  <Message key = {index} message ={message.content} username = {message.username} messageType= {message.messageType} /> ); 

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