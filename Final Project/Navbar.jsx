import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Game Hub</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rps">Rock Paper Scissors</Link></li>
        <li><Link to="/tictactoe">Tic Tac Toe</Link></li>
        <li><Link to="/wordle">Wordle</Link></li>
        <li><Link to="/hangman">Hangman</Link></li>
        <li><Link to="/memory">Memory</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
