// CardGrid.js
import React from "react";

function CardGrid({ heroes, removeHero }) {
  // Ensure heroes is always an array
  if (!Array.isArray(heroes)) {
    return <p>No heroes available</p>;
  }

  return (
    <div className="card-grid">
      {heroes.map((hero) => (
        <div key={hero.id} className="card">
          <h2>{hero.name}</h2>
          <button onClick={() => removeHero(hero.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default CardGrid;

