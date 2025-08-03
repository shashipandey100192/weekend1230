import { configureStore } from '@reduxjs/toolkit'
import  Customactions from './Myactionsflist'

export const actionstore = configureStore({
  reducer: {
    counter: Customactions
  },
})


