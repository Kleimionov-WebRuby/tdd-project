import { actionTypes } from '../actions';
import successReducer from './successReducer';

describe('successReducer', () => {
  it('when previous state is undefined, return false', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
  });

  it('return previous state when unknown action type', () => {
    const newState = successReducer(false, { type: 'unknown' });
    expect(newState).toBe(false);
  });

  it('return `true` for action type CORRECT_GUESS', () => {
    const newState = successReducer(false, { type: actionTypes.CORRECT_GUESS });
    expect(newState).toBe(true);
  });
});
