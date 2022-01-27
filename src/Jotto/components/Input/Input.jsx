import React from 'react';
import { useSelector } from 'react-redux';

const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState('');

  const success = useSelector((state) => state.success);

  const handleGuessInputChange = (event) => setCurrentGuess(event.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    setCurrentGuess('');
  };

  if (success) {
    return <div data-test="component-input" />;
  }

  return (
    <div data-test="component-input">
      <form>
        <input
          type="text"
          data-test="input-box"
          placeholder="Enter guess"
          value={currentGuess}
          onChange={handleGuessInputChange}
        />
        <button data-test="submit-button" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;
