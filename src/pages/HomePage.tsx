import React from 'react'
import {Navigate} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from '../store/hooks'
import {removeUser} from '../store/slices/sliceRegister'

export const HomePage: React.FC = () => {
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector((state) => state.user.isAuth)
  const email = useAppSelector((state) => state.user.email)

  return isAuth ? (
    <div>
      <h1>Welcom</h1>

      <button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
    </div>
  ) : (
    <Navigate to="/login" />
  )
}
