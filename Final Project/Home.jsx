import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { username, setUsername } = useContext(UserContext);
  const navigate = useNavigate();

  const handleStart = () => {
    if (username.trim()) {
      navigate('/rps');
    }
  };

  return (
    <div className="container">
      <h1>Welcome to Game Hub</h1>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Enter your name"
      />
      <button onClick={handleStart}>Start Playing</button>
    </div>
  );
}

export default Home;
