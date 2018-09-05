import React, {Component} from 'react';

class ChatBar  extends React.Component {

  constructor(props){
    super(props); 

    // this.state  = 
    // {
    //   currentUser:{name:""},
    //   username:"",
    //   message:"" 
  }

  handleKey = (event) => {
    if (event.charCode === 13)
    {
      let chatmsg = event.target.value;
      this.props.updateMsgContainer(chatmsg);
      event.target.value='';
    }
  }
 
  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" onBlur = {this.handleNameChange} placeholder="Your Name (Optional)" defaultValue = {this.props.user.name} />
        <input className="chatbar-message" onKeyPress = {this.handleKey} placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}


export default ChatBar;