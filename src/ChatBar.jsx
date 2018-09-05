import React, {Component} from 'react';

class ChatBar  extends React.Component {

  constructor(){
    super();

    this.state  = 
    {
      currentUser:{name:""},
      username:"",
      message:"" 
    };

    //this.handleKey = this.handleKey.bind(this);
  }

  handleKey(event){
    if (event.charCode === 13)
    {
      let chatmsg = document.getElementsByClassName("chatbar-message")[0].value;
      let chatusr = document.getElementsByClassName("chatbar-username")[0].value;
      if (chatmsg && chatusr){
        const oldmsgs = this.state.messages;
        const newMsgs = [...oldmsgs, chatmsg];
        this.setState ({messages: newMsgs})
      }
    }
  
    // const newMsgs = [...oldmsgs, "I got something !!"];
    // console.log('At least msgs stores: ', newMsgs)
    // this.setState({ messages: newMsgs });


  }
  
  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username"  placeholder="Your Name (Optional)" />
        <input className="chatbar-message" onKeyPress = {this.handleKey} placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}


export default ChatBar;