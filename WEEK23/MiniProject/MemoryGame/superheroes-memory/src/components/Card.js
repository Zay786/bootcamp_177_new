import React from 'react';

function Card({ superhero, handleCardClick }) {
  const { id, name, occupation, image } = superhero;

  return (
    // Attach the click handler, passing the card's unique ID
    <div className="card" onClick={() => handleCardClick(id)}>
      <img src={image} alt={name} className="card-image" />
      <div className="card-info">
        <p>Name: <strong>{name}</strong></p>
        <p>Occupation: {occupation}</p>
      </div>
    </div>
  );
}

export default Card;
