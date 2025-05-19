import React from 'react';

const RestaurantCards = ({ image, name, description, onViewMore }) => {
  return (
    <div className="card h-100 d-flex flex-column" style={{ width: '22rem' }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <button className="btn btn-primary mt-auto" onClick={onViewMore}>Ver más</button>
      </div>
    </div>
  );
};

export default RestaurantCards;