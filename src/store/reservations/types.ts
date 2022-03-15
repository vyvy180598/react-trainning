export type Reservation = {
  id: string,
  name: string
}

export interface IReservationState {
  value: Reservation[]
}
