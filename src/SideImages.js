export default function FoodImages({ SideId }) {
  return <div className='food-images'>
    <img src={`side-${SideId}.jpeg`} />
  </div>;
}