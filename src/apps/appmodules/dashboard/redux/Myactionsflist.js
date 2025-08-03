import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  age: 60,
}


export const Customactions = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    inc: (state) => {
      state.age += 1
    },
    dec: (state) => {
      state.age -= 1
    },
    abc: (state)=>{
        state.age = state.age+20
    },
  },
})

export const { inc, dec,abc} = Customactions.actions

export default Customactions.reducer