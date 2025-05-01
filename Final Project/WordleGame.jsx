import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';

const TARGET_WORD = "REACT";

function WordleGame() {
  const { username } = useContext(UserContext);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (guess.toUpperCase() === TARGET_WORD) {
      setMessage("Correct!");
    } else {
      setMessage("Try again!");
    }
    setGuess("");
  };

  return (
    <div className="container">
      <h2>Wordle</h2>
      <p>Welcome, {username}!</p>
      <input 
        value={guess} 
        onChange={(e) => setGuess(e.target.value)} 
        maxLength="5"
        placeholder="Guess the word"
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>{message}</p>
    </div>
  );
}

export default WordleGame;
