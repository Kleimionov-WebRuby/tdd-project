import moxios from 'moxios';

import { storeFactory } from '../test/testUtils';
import { getSecretWord } from './';

describe('getSecretWord', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('secretWord is returned', () => {
    const store = storeFactory();
    // eslint-disable-next-line testing-library/await-async-utils
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: 'party',
      });
    });

    return store.dispatch(getSecretWord()).then(() => {
      const secretWord = store.getState().secretWord;

      expect(secretWord).toBe('party');
    });
  });
});
