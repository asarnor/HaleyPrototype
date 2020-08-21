import React from 'react';
import './ChatBubble.css';

const ChatBubble = ({ message }) => {
  const style = {
    alignSelf: message.speaker === 'Duke' ? 'flex-start' : 'flex-end',
    backgroundColor: message.speaker === 'Duke' ? 'white' : '#db536a',
    color: message.speaker === 'Duke' ? 'black' : 'white',
  };
  return (
    <div className="chat-bubble" style={style}>
      {message.text}
    </div>
  );
};

export default ChatBubble;
