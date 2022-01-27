import axios from 'axios';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};

export const guessWord = (guessedWord) => (dispatch, getState) => {};

export const getSecretWord = () => {
  axios
    .get('http://localhost:3030')
    .then((response) => response.data)
    .catch((error) => error);

  // return new Promice for faked request
  return new Promise((resolve) => resolve('party'));
};
