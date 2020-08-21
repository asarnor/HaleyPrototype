import React, { useState, useLayoutEffect, useEffect } from 'react';
import ChatBubble from '../ChatBubble/ChatBubble';
import ChatInput from '../ChatInput/ChatInput';
import dukeBot from '../../util/dukeBot';

import './ChatField.css';

// Message Definition:
// {
//   id: number unique,
//   speaker: 'Duke' | 'user',
//   text: string
// }

const starterMessage = dukeBot.getCurrentMessage();
const nextMessage = dukeBot.nextMessage();
const initialMessages = [
  {
    id: 0,
    speaker: 'Duke',
    text: starterMessage,
  },
  {
    id: 1,
    speaker: 'Duke',
    text: nextMessage,
  },
];

const ChatField = ({ startAutomation }) => {
  const [messages, setMessages] = useState(initialMessages);

  const getLastMessage = () => messages[messages.length - 1];

  const getNextMessageId = () => {
    const lastMessage = getLastMessage();
    return lastMessage ? lastMessage.id + 1 : 1;
  };

  useEffect(() => {
    setTimeout(() => {
      const lastMessage = getLastMessage();
      if (lastMessage.speaker !== 'Duke') {
        const dukeResponse = dukeBot.nextMessage();
        addMessage(dukeResponse, 'Duke');
        if (dukeBot.noFutureMessages()) {
          startAutomation();
        }
      }
    }, 400);
  }, [messages]);

  useLayoutEffect(() => {
    const messagesContainer = document.querySelector('.messages-container');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, [messages]);

  const addMessage = (text, speaker = 'User') => {
    const id = getNextMessageId();

    const message = {
      id,
      speaker,
      text,
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
