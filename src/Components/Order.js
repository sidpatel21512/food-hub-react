import FoodItem from './FoodItem';
import FoodCard from './FoodCard';
const Order = () =>{
    return(
        <div className="container">
        <FoodCard>
          <FoodItem name='7 Cheesy Pizza' description='Mozrella cheese, Chedar cheese, Cheese souce, Special cheese'></FoodItem>
        </FoodCard>
        <FoodCard>
          <FoodItem name='Panner Makhani Pizza' description='Makahni souce, Paneer, Vegies'></FoodItem>
        </FoodCard>
        <FoodCard>
          <FoodItem name='Farm Fresh Pizza' description='Tomato, onion, Capsicum, Corn, Special cheese'></FoodItem>
        </FoodCard>
      </div>
    )
}

export default Order;