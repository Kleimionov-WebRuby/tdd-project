import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import { findElementByTestAttr, storeFactory } from './test/testUtils';
import Jotto from './Jotto';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <Jotto />
    </Provider>,
  );

  // add value to input box
  const inputBox = findElementByTestAttr(wrapper, 'input-box');
  inputBox.simulate('change', { target: { value: 'train' } });

  // simulate click on submit button
  const submitButton = findElementByTestAttr(wrapper, 'submit-button');
  submitButton.simulate('click', { preventDefault() {} });

  return wrapper;
};

describe('no words guessed', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [],
    });
  });

  it('creates GuessedWords table with one row', () => {
    const guessedWordRows = findElementByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordRows).toHaveLength(1);
  });
});

describe('some words guessed', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }],
    });
  });

  it('adds row to GuessedWords table', () => {
    const guessedWordRows = findElementByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordRows).toHaveLength(2);
  });
});

describe('guess secret word', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }],
    });

    // add value to input box
    const inputBox = findElementByTestAttr(wrapper, 'input-box');
    inputBox.simulate('change', { target: { value: 'party' } });

    // simulate click on submit button
    const submitButton = findElementByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() {} });
  });

  it('adds row to GuessedWords table', () => {
    const guessedWordRows = findElementByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordRows).toHaveLength(3);
  });

  it('display congrats component', () => {
    const congrats = findElementByTestAttr(wrapper, 'congrats-message');
    expect(congrats.exists()).toBe(true);
  });

  it('do not display input componen', () => {
    const inputBox = findElementByTestAttr(wrapper, 'input-box');
    expect(inputBox.exists()).toBe(false);

    const submitButton = findElementByTestAttr(wrapper, 'submit-button');
    expect(submitButton.exists()).toBe(false);
  });
});
