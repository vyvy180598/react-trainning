import { useState } from "react"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { ReservationCard } from '../components/ReservationCard'
import { RootState } from '../store'
import { addReservation } from '../store/reservations/reducer'
import { v4 as uuid } from "uuid";
import { CustomerCard } from "../components/CustomerCard"

export const ReservationsPage = () => {
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  )
  const customers = useSelector(
    (state: RootState) => state.customers.value
  )

  const dispatch = useDispatch()

  const [reservationName, setReservationName] = useState('')

  const handleSubmitReservation = () => {
    dispatch(addReservation({id: uuid(), name: reservationName}))
    setReservationName('')
  }
  return (
    <div>
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map(({id, name}) => (
                <ReservationCard id={id} name={name} key={id}/>
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationName} onChange={(e) => setReservationName(e.target.value)}/>
            <button onClick={handleSubmitReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map(({id, name, food}) => (
            <CustomerCard id={id} name={name} food={food} key={id}/>
          ))}
        </div>
      </div>
    </div>
  )
}
