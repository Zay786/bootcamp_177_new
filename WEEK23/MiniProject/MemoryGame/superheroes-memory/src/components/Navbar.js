import React from 'react';

function Navbar({ score, topScore }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Superheroes Memory Game</h1>
      </div>
      <div className="navbar-scores">
        <span>Score: <strong>{score}</strong></span>
        <span>Top Score: <strong>{topScore}</strong></span>
      </div>
    </nav>
  );
}

export default Navbar;