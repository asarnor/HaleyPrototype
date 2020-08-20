import React, { FunctionComponent, useState, useEffect } from "react";
import "./Welcome.css";
import Joyride from "react-joyride";
import { useSpeechSynthesis } from "react-speech-kit";

function Welcome() {
  const [stepsEnabled, setStepsEnabled] = useState(true);
  const [initialStep, setInitialStep] = useState(0);
  const [text, setText] = useState("Greetings from Haley");
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(0.8);
  const [voiceIndex, setVoiceIndex] = useState(17);
  const [steps, setStep] = useState([
    {
      target: "h1",
      content: "Hello step",
    },
    {
      target: ".content-text",
      content: "World step",
    },
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
        speak({ text, voice, rate, pitch })
        setText("Introducing Duke, PwC's adaptive virtual agent that helps navigates websites making the web easy to use")
        return;
      }
      if (index === 1) {
        speak({ text, voice, rate, pitch })
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
            <div className="pwc-image"></div>
            <div className="welcome-haley">
              <h1>Welcome, Haley</h1>
            </div>
            <div className="bottom-content">
              <div className="content-text">
                <p>
                  Introducing Duke, PwC's adaptive virtual agent thathelps
                  navigates websites making the web easy to use
                </p>
                <p> Would you like to continue on using voice? </p>
              </div>

              <div className="button-section">
                <div className="button">
                  <button>YES</button>
                  <span>Set my preferences using voice</span>
                </div>
                <div className="button">
                  <button>NO</button>
                  <span>Use text to setup preferences</span>
                </div>
              </div>
            </div>
          </div>

          <div className="image"></div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
