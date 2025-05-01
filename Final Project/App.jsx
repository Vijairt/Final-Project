import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { UserProvider } from './context/UserContext';
import RockPaperScissors from './games/RockPaperScissors/RPSGame';
import TicTacToe from './games/TicTacToe/TicTacToeGame';
import Wordle from './games/Wordle/WordleGame';
import Hangman from './games/Hangman/HangmanGame';
import MemoryGame from './games/MemoryCard/MemoryGame';
import Navbar from './components/Navbar';

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rps" element={<RockPaperScissors />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/wordle" element={<Wordle />} />
          <Route path="/hangman" element={<Hangman />} />
          <Route path="/memory" element={<MemoryGame />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
