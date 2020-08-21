import React from 'react';
import ChatInput from '../shared/ChatInput/ChatInput';
import { ReactComponent as PWCLogo } from '../assets/PWCLogoBlack.svg';

const IndependenceCheckpoint = () => {
  return (
    <div className="independence-checkpoint">
      <div className="content">
        <section className="header-section">
          <PWCLogo className="pwc-logo" />
          <h1>Welcome, Haley. How can Duke help you today?</h1>
        </section>
        <section className="content-section">
          <div className="welcome-chat">
            <ChatInput />
          </div>
        </section>
      </div>
    </div>
  );
};

export default IndependenceCheckpoint;
