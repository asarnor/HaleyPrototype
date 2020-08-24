import React, { FunctionComponent, useState, useEffect } from "react";
import haley from "./assets/humaaans-sitting-1.svg";
import pwcLogo from "./assets/PwC_Outline_Logo_Black_CMYK.svg";
import "./Welcome.css";
import Joyride from "react-joyride";
import { useSpeechSynthesis } from "react-speech-kit";
import SpeechComponent from "./SpeechComponent";

function Welcome() {
  const [stepsEnabled, setStepsEnabled] = useState(true);
  const [initialStep, setInitialStep] = useState(0);
  const [text, setText] = useState("Greetings from Haley. How can I help you?");
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(0.8);
  const [voiceIndex, setVoiceIndex] = useState(17);
  const [steps, setStep] = useState([
    {
      target: "h1",
      content: "Greetings from Haley",
    }
  ]);
  const onEnd = () => {
    // You could do something here after speaking has finished
  };

  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
    onEnd,
  });

  const voice = voices[voiceIndex] || null;

  const speechCallback = (data) => {
    const { action, index, status, type } = data;
    console.log(action);
    console.log(index);
    console.log(type);
    console.log(status);

    if (type === "tooltip") {
      if (index === 0) {
        speak({ text, voice, rate, pitch });
        return;
      }
      if (index === 1) {
        speak({ text, voice, rate, pitch });
        return;
      }
    }
  };

  return (
    <>
      <div className="Welcome">
        <Joyride
          enabled={stepsEnabled}
          steps={steps}
          initialStep={initialStep}
          callback={speechCallback}
        />
        <div className="container">
          <div className="content">
            <div className="pwc-image"><img src={pwcLogo} alt="logo" /></div>
            <div className="welcome-haley">
              <h1>Welcome, Haley.<br/> How can Duke help you today?</h1>
            </div>
            <div className="bottom-content">
              <div className="content-text">
              <SpeechComponent/>
              </div>
            </div>
          </div>

          <div className="image">
            <img src={haley} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
