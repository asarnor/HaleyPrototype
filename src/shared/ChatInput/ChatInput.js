import React, { useState } from 'react';
import { recognizeSpeechInput } from '../../util/speechRecognizer';
import { ReactComponent as Microphone } from '../../assets/microphone.svg';

import './ChatInput.css';

const ChatInput = ({ placeholder = 'Type or say something' }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => setInputValue(e.target.value);

  const handleMicButtonClick = async () => {
    const result = await recognizeSpeechInput();
    const text = result.privText;
    console.log(text);
    setInputValue(text);
  };

  return (
    <div className="chat-input-container">
      <input
        className="chat-input-box"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <Microphone
        className="chat-input-microphone"
        onClick={handleMicButtonClick}
      />
    </div>
  );
};

export default ChatInput;
