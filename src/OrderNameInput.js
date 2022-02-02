import React from 'react';

export default function OrderNameInput({ setOrderName }) {

  function handleChange(e) {
    setOrderName(e.target.value);
  }

  return <div>
    What name should we put on the order?
    <input onChange={handleChange} />
  </div>;
}
