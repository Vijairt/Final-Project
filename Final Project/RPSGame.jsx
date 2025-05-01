import React, { useEffect, useState, useContext } from 'react';
import { createRoom, sendMove, getRoomState } from '../../utils/gameRoomApi';
import { UserContext } from '../../context/UserContext';

function RPSGame() {
  const { username } = useContext(UserContext);
  const [roomId, setRoomId] = useState(null);
  const [opponentMove, setOpponentMove] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (username) {
      createRoom(username).then(data => setRoomId(data.roomId));
    }
  }, [username]);

  const handleMove = async (move) => {
    if (!roomId) return;

    await sendMove(roomId, { player: username, move });
    const state = await getRoomState(roomId);
    const opponent = state.players.find(p => p.username !== username);
    
    if (opponent?.move) {
      setOpponentMove(opponent.move);
      const result = determineResult(move, opponent.move);
      setStatus(`You chose ${move}, opponent chose ${opponent.move}. You ${result}.`);
    } else {
      setStatus("Waiting for opponent's move...");
    }
  };

  const determineResult = (userMove, cpuMove) => {
    if (userMove === cpuMove) return "tied";
    if (
      (userMove === "rock" && cpuMove === "scissors") ||
      (userMove === "paper" && cpuMove === "rock") ||
      (userMove === "scissors" && cpuMove === "paper")
    ) return "won";
    return "lost";
  };

  return (
    <div className="container">
      <h2>Rock Paper Scissors</h2>
      <p>Welcome, {username}! Room ID: {roomId}</p>
      <div>
        <button onClick={() => handleMove("rock")}>Rock</button>
        <button onClick={() => handleMove("paper")}>Paper</button>
        <button onClick={() => handleMove("scissors")}>Scissors</button>
      </div>
      <p>{status}</p>
    </div>
  );
}

export default RPSGame;
