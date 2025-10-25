import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import initialSuperheroes from './data/superheroes.json'; // Import the JSON data
import './App.css'; // For styling

// Helper function to perform the Fisher-Yates Shuffle
const shuffleArray = (array) => {
  let newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

function App() {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [clickedIds, setClickedIds] = useState([]);
  // Initialize superheroes array with a shuffled version of the imported data
  const [superheroes, setSuperheroes] = useState(shuffleArray(initialSuperheroes));

  // --- SCORE LOGIC: Update top score when current score is higher ---
  useEffect(() => {
    if (score > topScore) {
      setTopScore(score);
    }
  }, [score, topScore]);

  // --- GAME LOGIC: Handles the card click event ---
  const handleCardClick = (id) => {
    // 1. Check if the card has already been clicked
    if (clickedIds.includes(id)) {
      // **REPEATED CLICK**: Reset game
      setScore(0);
      setClickedIds([]); // Clear history
    } else {
      // **NEW CLICK**: Award point and record ID
      setScore(score + 1);
      setClickedIds([...clickedIds, id]);
    }
    
    // 2. Shuffle cards after every click
    setSuperheroes(shuffleArray(superheroes));
  };

  return (
    <div className="App">
      <Navbar score={score} topScore={topScore} />
      <p className="instruction-text">
        Get points by clicking on an image but don't click on any more than once!
      </p>
      
      {/* Game Area */}
      <div className="game-area">
        {superheroes.map((hero) => (
          <Card 
            key={hero.id} // Use ID as key for React list rendering
            superhero={hero} 
            handleCardClick={handleCardClick} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
