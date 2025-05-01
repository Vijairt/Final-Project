import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';

const initialBoard = Array(9).fill(null);

function TicTacToeGame() {
  const { username } = useContext(UserContext);
  const [board, setBoard] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;
    const newBoard = board.slice();
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(board);

  return (
    <div className="container">
      <h2>Tic Tac Toe</h2>
      <p>Welcome, {username}!</p>
      <div className="board">
        {board.map((cell, idx) => (
          <button key={idx} onClick={() => handleClick(idx)}>{cell}</button>
        ))}
      </div>
      <p>{winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`}</p>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (let [a,b,c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToeGame;
