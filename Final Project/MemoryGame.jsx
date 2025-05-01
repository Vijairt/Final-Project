import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';

const items = ['🐶','🐱','🐭','🐹','🐰'];
const shuffled = [...items, ...items].sort(() => 0.5 - Math.random());

function MemoryGame() {
  const { username } = useContext(UserContext);
  const [cards, setCards] = useState(shuffled.map((val, i) => ({ id: i, val, flipped: false, matched: false })));
  const [selected, setSelected] = useState([]);

  const handleFlip = (card) => {
    if (card.flipped || card.matched || selected.length === 2) return;
    const updatedCards = cards.map(c => c.id === card.id ? { ...c, flipped: true } : c);
    const newSelected = [...selected, card];
    if (newSelected.length === 2) {
      const [first, second] = newSelected;
      if (first.val === second.val) {
        setCards(updatedCards.map(c => 
          c.val === first.val ? { ...c, matched: true } : c
        ));
      } else {
        setTimeout(() => {
          setCards(updatedCards.map(c => 
            c.id === first.id || c.id === second.id ? { ...c, flipped: false } : c
          ));
        }, 1000);
      }
      setSelected([]);
    } else {
      setSelected(newSelected);
    }
    setCards(updatedCards);
  };

  return (
    <div className="container">
      <h2>Memory Card Game</h2>
      <p>Welcome, {username}!</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 60px)", gap: "10px" }}>
        {cards.map(card => (
          <div 
            key={card.id} 
            onClick={() => handleFlip(card)} 
            style={{ width: 60, height: 60, backgroundColor: "#ddd", textAlign: "center", fontSize: 30, lineHeight: "60px", cursor: "pointer" }}
          >
            {card.flipped || card.matched ? card.val : "❓"}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemoryGame;
