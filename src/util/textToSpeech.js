import {
  SpeechConfig,
  AudioConfig,
  SpeechSynthesizer,
  SpeakerAudioDestination,
} from 'microsoft-cognitiveservices-speech-sdk';

const subscriptionKey = 'c184146a9e5c4b80a93cc8f56486ca31';
const serviceRegion = 'westus';
const speechConfig = SpeechConfig.fromSubscription(
  subscriptionKey,
  serviceRegion
);
speechConfig.speechRecognitionLanguage = 'en-US';

const player = new SpeakerAudioDestination();
const audioConfig = AudioConfig.fromDefaultSpeakerOutput(player);

const synthesizer = new SpeechSynthesizer(speechConfig, audioConfig);

export default synthesizer;

export const speak = (textInput) => {
  return new Promise((resolve, reject) => {
    synthesizer.speakTextAsync(textInput, resolve, reject);
  });
};

export const speakOnKeyDown = (speakingText) => (e) => {
  if (e.keyCode === 13 || e.keyCode === 32) {
    speak(speakingText);
  }
};
