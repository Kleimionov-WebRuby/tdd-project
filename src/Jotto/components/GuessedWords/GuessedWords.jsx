const GuessedWords = ({ guessedWords }) => {
  const guessedWordsRows = guessedWords.map(({ guessedWord, letterMatchCount }, index) => (
    <tr data-test="guessed-word" key={index}>
      <th>{guessedWord}</th>
      <th>{letterMatchCount}</th>
    </tr>
  ));
  return (
    <div data-test="component-guessed-words">
      {guessedWords.length ? (
        <div data-test="guessed-words">
          <h3>Guessed Words</h3>
          <table border="1" cellSpacing="0" cellPadding="5">
            <thead>
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>{guessedWordsRows}</tbody>
          </table>
        </div>
      ) : (
        <span data-test="guess-instruction">Try to guess a word</span>
      )}
    </div>
  );
};

export default GuessedWords;
