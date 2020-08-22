import React, { useEffect } from 'react';
import ChatInput from '../shared/ChatInput/ChatInput';
import { speak } from '../util/textToSpeech';
import { ReactComponent as PWCLogo } from '../assets/PWCLogoBlack.svg';
import { ReactComponent as Illustration } from '../assets/humaaans-sitting-1.svg';
import './Welcome.css';

const Welcome = ({ advancePage }) => {
  useEffect(() => {
    const onMountText = 'Welcome, Haley. How can Duke help you today?';
    speak(onMountText);
  }, []);

  return (
    <div className="Welcome">
      <div className="content">
        <section className="header-section">
          <PWCLogo className="pwc-logo" />
          <h1>Welcome, Haley. How can Duke help you today?</h1>
        </section>
        <section className="content-section">
          <div className="welcome-chat">
            <ChatInput callBack={advancePage} />
          </div>
        </section>
      </div>

      <Illustration className="welcome-illustration" />
    </div>
  );
};

export default Welcome;
