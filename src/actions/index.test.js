import moxios from 'moxios';
import { getSecretWord } from './';

describe('getSecretWord', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('secretWord is returned', () => {
    // eslint-disable-next-line testing-library/await-async-utils
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: 'party',
      });
    });
    return getSecretWord().then((secretWord) => {
      expect(secretWord).toBe('party');
    });
  });
});
