import './App.css';
import { useState } from 'react';
import OrderNameInput from './OrderNameInput';
import FoodImage from './FoodImage';
import FoodDropdown from './FoodDropdown';
import DrinkDropdown from './DrinkDropdown';
import SideDropdown from './SideDropdown';

function App() {
  const [OrderName, setOrderName] = useState('Customer');
  const [foodId, setFoodId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [instructions, setInstructions] = useState([]);

  return (
    <div className="App">
      <h1>Order for {OrderName}</h1>
      <OrderNameInput setOrderName={setOrderName} />
      <section className='display-cards'>
        <div className='item-display-card'>
          <FoodImage 
            id={foodId}
            type={'Food'} />
          <FoodDropdown setFoodId={setFoodId} />
        </div>
        <div className='item-display-card'>
          <FoodImage 
            id={drinkId}
            type={'Drink'} />
          <DrinkDropdown setDrinkId={setDrinkId} />
        </div>
        <div className='item-display-card'>
          <FoodImage 
            id={sideId}
            type={'Side'} />
          <SideDropdown setSideId={setSideId} />
        </div>
      </section>
      {/* <InstructionForm
        Instructions={Instructions} setInstructions={setInstructions} /> */}
    </div>
  );
}

export default App;
