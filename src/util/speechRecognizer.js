import { SpeechConfig, AudioConfig, SpeechRecognizer } from 'microsoft-cognitiveservices-speech-sdk';

const subscriptionKey = 'c184146a9e5c4b80a93cc8f56486ca31'
const serviceRegion = 'westus';
const speechConfig = SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);
speechConfig.speechRecognitionLanguage = 'en-US';

const audioConfig = AudioConfig.fromDefaultMicrophoneInput();

const speechRecognizer = new SpeechRecognizer(speechConfig, audioConfig);

export default speechRecognizer;

export const recognizeSpeechInput = () => {
  return new Promise((resolve, reject) => {
    speechRecognizer.recognizeOnceAsync(resolve, reject);
  })
}