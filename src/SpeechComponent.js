import React, { useState, useEffect } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';
import mic from "./assets/microphone.svg";
import "./SpeechComponent.css";
// import { Container } from './shared';

const languageOptions = [
  { label: 'Cambodian', value: 'km-KH' },
  { label: 'Deutsch', value: 'de-DE' },
  { label: 'English', value: 'en-AU' },
  { label: 'Farsi', value: 'fa-IR' },
  { label: 'Français', value: 'fr-FR' },
  { label: 'Italiano', value: 'it-IT' },
  { label: '普通话 (中国大陆) - Mandarin', value: 'zh' },
  { label: 'Portuguese', value: 'pt-BR' },
  { label: 'Español', value: 'es-MX' },
  { label: 'Svenska - Swedish', value: 'sv-SE' },
];

const SpeechComponent = ({talking}) => {
  const [lang, setLang] = useState('en-AU');
  const [value, setValue] = useState('');
  const [blocked, setBlocked] = useState(false);
  // const [isTalking, setIsTalking] = useState(false)

  useEffect(()=>{
    setBlocked(talking)
  }, [talking])

  

  const onEnd = () => {
    // You could do something here after listening has finished
  };

  const onResult = (result) => {
    setValue(result);
  };

  const changeLang = (event) => {
    setLang(event.target.value);
  };

  const onError = (event) => {
    if (event.error === 'not-allowed') {
      setBlocked(true);
    }
  };

  const { listen, listening, stop, supported } = useSpeechRecognition({
    onResult,
    onEnd,
    onError,
  });

  const toggle = listening
    ? stop
    : () => {
        setBlocked(false);
        listen({ lang });
      };

  return (
    <React.Fragment>
      <form className="speechComponent" id="speech-recognition-form">
        {!supported && (
          <p>
            Oh no, it looks like your browser doesn&#39;t support Speech
            Recognition.
          </p>
        )}
        {supported && (
          <React.Fragment>
            <select
              form="speech-recognition-form"
              id="language"
              value={lang}
              onChange={changeLang}
            >
              {languageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <input
              id="transcript"
              name="transcript"
              placeholder="Type or say something to  search task"
              value={value}
              rows={3}
              disabled
            />
            <button className="micButton" disabled={blocked} type="button" onClick={toggle}>
               <img className="buttonImg" src={mic} alt="logo" />
            </button>
            {/* {blocked && (
              <p style={{ color: 'red' }}>
                The microphone is blocked for this site in your browser.
              </p>
            )} */}
          </React.Fragment>
        )}
      </form>
    </React.Fragment>
  );
};

export default SpeechComponent;