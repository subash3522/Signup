import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import anotherSlice from './anotherSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    another:anotherSlice,
  },
})
