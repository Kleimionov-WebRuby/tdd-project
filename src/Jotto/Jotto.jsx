import { useEffect } from 'react';

import Congrats from './components/Congrats';
import Input from './components/Input';
import GuessedWords from './components/GuessedWords';
import { getSecretWord } from '../actions';

const Jotto = () => {
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];

  useEffect(() => {
    getSecretWord();
  }, []);

  return (
    <div data-test="component-jotto">
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
};

export default Jotto;
