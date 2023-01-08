import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  email: null,
  id: null,
  isAuth: false,
}

const userSlice = createSlice({
  name: 'users',
  initialState,

  reducers: {
    setUser(state, action) {
      state.email = action.payload.email
      state.id = action.payload.uid
      state.isAuth = true
    },
    removeUser(state) {
      state.email = null
      state.id = null
      state.isAuth = !state.isAuth
    },
  },
})

export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer
