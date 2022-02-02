import './App.css';
import { useState } from 'react';
import OrderNameInput from './OrderNameInput';
import FoodImages from './FoodImages';
import FoodDropdown from './FoodDropdown';
import DrinkDropdown from './DrinkDropdown';
import SideDropdown from './SideDropdown';


function App() {
  const [OrderName, setOrderName] = useState('Customer');
  const [FoodId, setFoodId] = useState(1);
  const [DrinkId, setDrinkId] = useState(1);
  const [SideId, setSideId] = useState(1);

  return (
    <div className="App">
      <h1>Order for {OrderName}</h1>
      <OrderNameInput setOrderName={setOrderName} />
      <section>
        <FoodImages 
          foodId={FoodId}
          drinkId={DrinkId}
          sideId={SideId}
        />
        <div>
          <FoodDropdown setFoodId={setFoodId} />
          <DrinkDropdown setDrinkId={setDrinkId} />
          <SideDropdown setSideId={setSideId} />
        </div>
      </section>
    </div>
  );
}

export default App;
