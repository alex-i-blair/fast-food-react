import React from 'react';

export default function FoodImages({ id, type }) {

  return <div className='food-images'>
    <img src={`${type}-${id}.jpeg`} />
  </div>;
}
