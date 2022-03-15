import { useState } from "react"
import { useDispatch } from "react-redux"
import { addFoodToCustomer } from '../store/customers/reducer'
type CustomerCardProps = {
  id: string,
  name: string,
  food: string[]
}

export const CustomerCard = ({id, name, food}: CustomerCardProps) => {
  const [customerFood, setCustomerFood] = useState('')
  const dispatch = useDispatch()

  const handleSubmitFood = () => {
    dispatch(addFoodToCustomer({id, food: customerFood}))
    setCustomerFood('')
  }

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        {food.map((food, idx) => (
          <div className="customer-food" key={idx}>{food}</div>
        ))}
        <div className="customer-food-input-container">
          <input value={customerFood} onChange={e => setCustomerFood(e.target.value)} />
          <button onClick={handleSubmitFood}>Add</button>
        </div>
      </div>
    </div>
  )
}
