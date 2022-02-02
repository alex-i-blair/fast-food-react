import React from 'react';

export default function FoodImages({ FoodId }) {
  return <div className='food-images'>
    <img src={`food-${FoodId}.jpeg`} />
  </div>;
}
