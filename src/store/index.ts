import { configureStore } from '@reduxjs/toolkit'
import reservationsReducer from './reservations/reducer'
import customersReducer from './customers/reducer'

export const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    customers: customersReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispacth = typeof store.dispatch
