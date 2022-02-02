export default function FoodImages({ DrinkId }) {
  return <div className='food-images'>
    <img src={`drink-${DrinkId}.png`} />
  </div>;
}