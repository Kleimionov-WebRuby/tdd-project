export const getLetterMatchCount = (quessedWord, secretWord) => {
  const secterLetters = secretWord.split('');
  const guessedLetterSet = new Set(quessedWord);

  return secterLetters.filter((letter) => guessedLetterSet.has(letter)).length;
};
