import React from '../speech-api-test/node_modules/@types/react';
import SpeechInput from './Components/SpeechInput'
import SpeechRecognition from './Components/SpeechRecognition';

function App() {
  return (
    <div className="App">
          <SpeechInput/>
          <SpeechRecognition/>
    </div>
  );
}

export default App;
