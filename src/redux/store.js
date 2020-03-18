import { configureStore } from '@reduxjs/toolkit'
import exampleReducer from './exampleSlice'

export default configureStore({
  reducer: {
    exampleUsers: exampleReducer,
  },
})
