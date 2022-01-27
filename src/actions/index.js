import axios from 'axios';

import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};

export const guessWord = (guessedWord) => (dispatch, getState) => {
  const secretWord = getState().secretWord;

  const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

  dispatch({
    type: actionTypes.GUESS_WORD,
    payload: { guessedWord, letterMatchCount },
  });

  if (guessedWord === secretWord) {
    dispatch({ type: actionTypes.CORRECT_GUESS });
  }
};

export const getSecretWord = () => {
  axios
    .get('http://localhost:3030')
    .then((response) => response.data)
    .catch((error) => error);

  // return new Promice for faked request
  return new Promise((resolve) => resolve('party'));
};
