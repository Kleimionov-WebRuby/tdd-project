import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Congrats from './components/Congrats';
import Input from './components/Input';
import GuessedWords from './components/GuessedWords';
import { getSecretWord } from '../actions';

const Jotto = () => {
  const dispatch = useDispatch();

  const success = useSelector((state) => state.success);
  const guessedWords = useSelector((state) => state.guessedWords);

  useEffect(() => {
    dispatch(getSecretWord());
  }, []);

  return (
    <div data-test="component-jotto">
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
};

export default Jotto;
