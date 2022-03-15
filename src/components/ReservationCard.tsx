import { useDispatch } from 'react-redux'
import { removeReservation } from '../store/reservations/reducer'
import { addCustomer } from '../store/customers/reducer'

type ReservationCardProps = {
  id: string,
  name: string
}

export const ReservationCard = ({id , name} : ReservationCardProps) => {
  const dispatch = useDispatch()

  return (
    <div
      className="reservation-card-container"
      onClick={() => {
        dispatch(removeReservation({id, name}));
        dispatch(
          addCustomer({
            id: id,
            name,
            food: []
          })
        )
      }}
    >
      <p>{name}</p>
    </div>
  )
}
