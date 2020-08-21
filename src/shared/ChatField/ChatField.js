import React, { useState, useLayoutEffect } from 'react';
import ChatBubble from '../ChatBubble/ChatBubble';
import ChatInput from '../ChatInput/ChatInput';

import './ChatField.css';

const ChatField = () => {
  const [messages, setMessages] = useState(sampleMessages);

  useLayoutEffect(() => {
    const messagesContainer = document.querySelector('.messages-container');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, [messages]);

  // Message Definition:
  // {
  //   id: number unique,
  //   speaker: 'Duke' | 'user',
  //   text: string
  // }

  const addMessage = (messageText) => {
    const lastMessageId = messages[messages.length - 1];

    const message = {
      id: lastMessageId.id + 1,
      speaker: 'User',
      text: messageText,
    };

    setMessages([...messages, message]);
  };

  return (
    <div className="chat-field">
      <div className="messages-container">
        {messages.map((message) => (
          <ChatBubble key={message.id} message={message} />
        ))}
      </div>
      <div className="input-container">
        <ChatInput callBack={addMessage} />
      </div>
    </div>
  );
};

export default ChatField;
