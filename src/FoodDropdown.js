export default function FoodDropdown({ setFoodId }) {
  function handleChange(e) {
    setFoodId(e.target.value);
  }
  return <div className='dropdown'>
    <select defaultValue='' onChange={handleChange}>
      <option disabled={true} value=''>Select a main</option>
      <option value='1'>Burger</option>
      <option value='2'>Pizza</option>
      <option value='3'>Spaghetti and Meatballs</option>
    </select>
  </div>;
}