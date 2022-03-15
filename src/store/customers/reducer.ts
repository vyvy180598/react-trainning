import { createSlice, PayloadAction }  from '@reduxjs/toolkit'
import { Customer, ICustomerState, ICustomerFoodPayload } from './types'

const initialState: ICustomerState = {
  value: []
}

export const customersSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload)
    },
    addFoodToCustomer: (
      state,
      action: PayloadAction<ICustomerFoodPayload>
    ) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      })
    }
  }
})

export const { addCustomer, addFoodToCustomer } = customersSlice.actions

export default customersSlice.reducer
