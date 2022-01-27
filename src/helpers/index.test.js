import { getLetterMatchCount } from './index';

describe('getLetterMatchCount', () => {
  const secreteWord = 'party';

  it('returns correct count when there are no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secreteWord);
    expect(letterMatchCount).toBe(0);
  });
  it('returns correct count when there are three matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secreteWord);
    expect(letterMatchCount).toBe(3);
  });
  it('returns correct count when there are duplicate letters in the guess', () => {
    const letterMatchCount = getLetterMatchCount('parka', secreteWord);
    expect(letterMatchCount).toBe(3);
  });
});
