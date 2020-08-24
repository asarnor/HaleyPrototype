import React, { useEffect } from 'react';
import { speak, speakOnKeyDown } from '../util/textToSpeech';
import ChatInput from '../shared/ChatInput/ChatInput';
import { ReactComponent as PWCLogo } from '../assets/PWCLogoBlack.svg';

import './IndependenceCheckpoint.css';

const IndependenceCheckpoint = ({ advancePage }) => {
  // useEffect(() => {
  //   const onMountText =
  //     'Haley, what do you want to do on Independence Checkpoint?';
  //   speak(onMountText);
  // }, []);

  const mainText = 'Haley, what do you want to do on Independence Checkpoint?';

  return (
    <div className="independence-checkpoint">
      <div className="content">
        <section className="header-section">
          <PWCLogo className="pwc-logo" />
          <h1 tabIndex="0" onKeyDown={speakOnKeyDown(mainText)}>
            Haley, what do you want to do on Independence Checkpoint?
          </h1>
        </section>
        <section className="content-section">
          <div className="welcome-chat">
            <ChatInput callBack={advancePage} />
          </div>
          <div className="options-container">
            <h3>
              Duke's
              <br />
              Skills
            </h3>
            <div className="option-box">Add a new security relationship</div>
            <div className="option-box" onClick={advancePage}>
              Set up a brokerage account
            </div>
            <div className="option-box">Add a loan</div>
            <div className="option-box">Delete a brokerage account</div>
            <div className="option-box">Create a portfolio</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IndependenceCheckpoint;
