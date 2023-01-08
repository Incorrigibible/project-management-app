import {configureStore} from '@reduxjs/toolkit'
import userReduser from './slices/sliceRegister'

const store = configureStore({
  reducer: {
    user: userReduser,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
