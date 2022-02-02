import React from 'react';

export default function DrinkDropdown({ setDrinkId }) {
  function handleChange(e) {
    setDrinkId(e.target.value);
  }
  return <div>
    Select a Drink
    <select onChange={handleChange}>
      <option value='1'>Coke</option>
      <option value='2'>Margarita</option>
      <option value='3'>Beer</option>
    </select>
  </div>;
}
