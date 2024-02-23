import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    valueToggler:false,
  },
  reducers: {
    increment: (state) => {
    
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    togglerSwitch:(state)=>{state.valueToggler=!state.valueToggler},
  },
})

// export const { increment, decrement, incrementByAmount ,togglerSwitch} = counterSlice.actions

export default counterSlice.reducer