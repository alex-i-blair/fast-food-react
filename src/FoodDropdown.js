export default function FoodDropdown({ setFoodId }) {
  function handleChange(e) {
    setFoodId(e.target.value);
  }
  return <div>
    Select a Main
    <select onChange={handleChange}>
      <option value='1'>Burger</option>
      <option value='2'>Pizza</option>
      <option value='3'>Spaghetti and Meatballs</option>
    </select>
  </div>;
}