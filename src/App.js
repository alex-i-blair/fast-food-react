import './App.css';
import { useState } from 'react';
import OrderNameInput from './OrderNameInput';
import FoodImages from './FoodImages';
import FoodDropdown from './FoodDropdown';
import DrinkDropdown from './DrinkDropdown';
import SideDropdown from './SideDropdown';
import SideImages from './SideImages';
import DrinkImages from './DrinkImages';

function App() {
  const [OrderName, setOrderName] = useState('Customer');
  const [FoodId, setFoodId] = useState(1);
  const [DrinkId, setDrinkId] = useState(1);
  const [SideId, setSideId] = useState(1);

  return (
    <div className="App">
      <h1>Order for {OrderName}</h1>
      <OrderNameInput setOrderName={setOrderName} />
      <section className='display-cards'>
        <div className='item-display-card'>
          <FoodImages FoodId={FoodId} />
          <FoodDropdown setFoodId={setFoodId} />
        </div>
        <div className='item-display-card'>
          <DrinkImages DrinkId={DrinkId} />
          <DrinkDropdown setDrinkId={setDrinkId} />
        </div>
        <div className='item-display-card'>
          <SideImages SideId={SideId} />
          <SideDropdown setSideId={setSideId} />
        </div>
      </section>
    </div>
  );
}

export default App;
