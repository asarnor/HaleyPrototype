import React, { useState } from 'react';
import { recognizeSpeechInput } from '../../util/speechRecognizer';
import { ReactComponent as Microphone } from '../../assets/microphone.svg';

import './ChatInput.css';

const ChatInput = ({ placeholder = 'Type or say something', callBack }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => setInputValue(e.target.value);

  const handleMicButtonClick = async () => {
    setInputValue('');
    const result = await recognizeSpeechInput();
    const text = result.privText;
    setInputValue(text);
    callBack(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    callBack(inputValue);
    setInputValue('');
  };

  return (
    <form className="chat-input-container" onSubmit={handleSubmit}>
      <input
        className="chat-input-box"
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        onClick={() => setInputValue('')}
      />
      <Microphone
        className="chat-input-microphone"
        onClick={handleMicButtonClick}
      />
    </form>
  );
};

export default ChatInput;
