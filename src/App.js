import { useEffect } from 'react';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
import { ALAN_AI_KEY } from './utils/keys';

function App() {
  useEffect(() => {
    alanBtn({
      key: ALAN_AI_KEY,
      onCommand: (commandData) => {
        if (commandData.command === 'testCommand') {
          alert('This is an Alan AI demo');
        }
      },
    });
  }, []);

  return (
    <div className='App'>
      <h1>Alan AI demo application</h1>
    </div>
  );
}

export default App;
