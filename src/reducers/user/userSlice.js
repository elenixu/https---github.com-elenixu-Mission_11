import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstname: 'I LOVE',
  lastname: 'YOU',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    //updateName(state, action) {}
  },
})

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default userSlice.reducer
