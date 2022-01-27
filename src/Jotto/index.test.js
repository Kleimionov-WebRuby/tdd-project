import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';

import { findElementByTestAttr, storeFactory } from '../test/testUtils';
import { getSecretWord as mockGetSecretWord } from '../actions';
import Jotto from './Jotto';

// activate global mock to make sure getSecretWord doesn't make a network call
jest.mock('../actions');

describe('Jotto', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Jotto />);
  });

  it('renders without error', () => {
    const counterComponent = findElementByTestAttr(wrapper, 'component-jotto');
    expect(counterComponent).toHaveLength(1);
  });
});
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);

  // use 'mount', because useEffect not called on 'shallow'
  return mount(
    <Provider store={store}>
      <Jotto />
    </Provider>,
  );
};

describe('get secret word', () => {
  let wrapper;

  beforeEach(() => {
    mockGetSecretWord.mockClear();

    wrapper = setup(); // use 'setup' after mockClear() !
  });

  it('getSecretWord on componen mount', () => {
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });

  it('getSecretWord does not run on app update', () => {
    mockGetSecretWord.mockClear();
    // useing setProps because wrapper.update() doesn't trigger useEffect
    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
