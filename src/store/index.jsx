import { configureStore } from '@reduxjs/toolkit'
import auth from './module/authSlice'

export const store = configureStore({
  reducer: {
    auth,
  },
})