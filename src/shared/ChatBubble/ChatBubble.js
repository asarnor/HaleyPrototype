import React from 'react';
import './ChatBubble.css';
import { speakOnKeyDown } from '../../util/textToSpeech';

const ChatBubble = ({ message }) => {
  const style = {
    alignSelf: message.speaker === 'Duke' ? 'flex-start' : 'flex-end',
    backgroundColor: message.speaker === 'Duke' ? 'white' : '#db536a',
    color: message.speaker === 'Duke' ? 'black' : 'white',
  };

  return (
    <div
      className="chat-bubble"
      style={style}
      tabIndex="0"
      onKeyDown={speakOnKeyDown(message.text)}
    >
      {message.text}
    </div>
  );
};

export default ChatBubble;
