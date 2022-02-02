import React from 'react';

export default function FoodImages({ foodId, drinkId, sideId }) {
  return <div className='food-images'>
    <img src={`food-${foodId}.jpeg`} />
    <img src={`drink-${drinkId}.png`} />
    <img src={`side-${sideId}.jpeg`} />
    
  </div>;
}
