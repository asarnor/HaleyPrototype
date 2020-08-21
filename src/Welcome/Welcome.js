import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import ChatInput from '../shared/ChatInput/ChatInput';
import { ReactComponent as PWCLogo } from '../assets/PWCLogoBlack.svg';
import { ReactComponent as Illustration } from '../assets/humaaans-sitting-1.svg';
import './Welcome.css';

const Welcome = ({ advancePage }) => {
  const [text, setText] = useState('Greetings from Haley');
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(0.8);
  const [voiceIndex, setVoiceIndex] = useState(17);
  const onEnd = () => {
    // You could do something here after speaking has finished
  };

  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
    onEnd,
  });

  const voice = voices[voiceIndex] || null;

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
