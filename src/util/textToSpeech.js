import {
  SpeechConfig,
  AudioConfig,
  SpeechSynthesizer,
} from 'microsoft-cognitiveservices-speech-sdk';

const subscriptionKey = 'c184146a9e5c4b80a93cc8f56486ca31';
const serviceRegion = 'westus';
const speechConfig = SpeechConfig.fromSubscription(
  subscriptionKey,
  serviceRegion
);
speechConfig.speechRecognitionLanguage = 'en-US';

const audioConfig = AudioConfig.fromDefaultSpeakerOutput();
const synthesizer = new SpeechSynthesizer(speechConfig, audioConfig);

export default synthesizer;

export const speak = (textInput) => {
  return new Promise((resolve, reject) => {
    synthesizer.speakTextAsync(textInput, resolve, reject);
  });
};