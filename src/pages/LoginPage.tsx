import React from 'react'
import {NavLink} from 'react-router-dom'
import {Login} from '../components/Login/Login'

export const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <Login />
      <p>
        Or <NavLink to="/register">register</NavLink>
      </p>
    </div>
  )
}
