import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import { findElementByTestAttr, storeFactory } from '../../../test/testUtils';
import Input from './Input';

// const mockSetCurrentGuess = jest.fn();
// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: (initialState) => [initialState, mockSetCurrentGuess],
// }));

const setup = (initialState = {}, secretWord = 'party') => {
  const store = storeFactory(initialState);

  // use 'mount', because useEffect not called on 'shallow'
  return mount(
    <Provider store={store}>
      <Input secretWord={secretWord} />
    </Provider>,
  );
};

describe('render', () => {
  describe('success is true', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup({ success: true });
    });

    it('Input renders without error', () => {
      const inputComponent = findElementByTestAttr(wrapper, 'component-input');
      expect(inputComponent.length).toBe(1);
    });
    it('Input box does not displays', () => {
      const inputBox = findElementByTestAttr(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(false);
    });
    it('Button does not displays', () => {
      const submitButton = findElementByTestAttr(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(false);
    });
  });
  describe('success is false', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup({ success: false });
    });

    it('Input renders without error', () => {
      const inputComponent = findElementByTestAttr(wrapper, 'component-input');
      expect(inputComponent.length).toBe(1);
    });
    it('Input box displays', () => {
      const inputBox = findElementByTestAttr(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(true);
    });
    it('Button displays', () => {
      const submitButton = findElementByTestAttr(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(true);
    });
  });
});

describe('Input', () => {
  let wrapper;
  let originalUseState;
  let mockSetCurrentGuess = jest.fn();

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

    wrapper = setup({ success: false });
  });

  afterEach(() => {
    React.useState = originalUseState;
  });

  it('state updates with value of input box upon change', () => {
    const inputBox = findElementByTestAttr(wrapper, 'input-box');
    const mockEvent = { target: { value: 'train' } };

    inputBox.simulate('change', mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  it('input is cleared upon submit button click', () => {
    const submitButton = findElementByTestAttr(wrapper, 'submit-button');

    submitButton.simulate('click', { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});
