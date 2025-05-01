import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';

const WORD = "JAVASCRIPT";

function HangmanGame() {
  const { username } = useContext(UserContext);
  const [guesses, setGuesses] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);

  const handleGuess = (letter) => {
    const upperLetter = letter.toUpperCase();
    if (guesses.includes(upperLetter)) return;
    setGuesses([...guesses, upperLetter]);
    if (!WORD.includes(upperLetter)) {
      setWrongGuesses([...wrongGuesses, upperLetter]);
    }
  };

  const maskedWord = WORD.split('').map(l => guesses.includes(l) ? l : '_').join(' ');

  return (
    <div className="container">
      <h2>Hangman</h2>
      <p>Welcome, {username}!</p>
      <p>{maskedWord}</p>
      <div>
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').map((letter) => (
          <button key={letter} onClick={() => handleGuess(letter)} disabled={guesses.includes(letter)}>
            {letter}
          </button>
        ))}
      </div>
      <p>Wrong guesses: {wrongGuesses.join(', ')}</p>
    </div>
  );
}

export default HangmanGame;
