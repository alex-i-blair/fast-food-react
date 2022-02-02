export default function SideDropdown({ setSideId }) {
  function handleChange(e) {
    setSideId(e.target.value);
  }
  return <div className='dropdown'>
    <select defaultValue='' onChange={handleChange}>
      <option disabled={true} value=''>Select a side</option>
      <option value='1'>Mac Salad</option>
      <option value='2'>Fries</option>
      <option value='3'>Fried Pickles</option>
    </select>
  </div>;
}