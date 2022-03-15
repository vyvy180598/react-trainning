import { createSlice, PayloadAction }  from '@reduxjs/toolkit'
import { Reservation, IReservationState } from './types'

const initialState: IReservationState = {
  value: []
}

export const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<Reservation>) => {
      state.value.push(action.payload)
    },
    removeReservation: (state, action: PayloadAction<Reservation>) => {
      state.value = state.value.filter(item => {
        return item.id !== action.payload.id
      })
    }
  }
})

export const { addReservation, removeReservation } = reservationsSlice.actions

export default reservationsSlice.reducer
