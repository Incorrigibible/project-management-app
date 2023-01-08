import React from 'react'
import {NavLink} from 'react-router-dom'
import {SignUp} from '../components/SignUp/SignUp'

export const RegisterPage: React.FC = () => {
  return (
    <div>
      <h1>Register</h1>
      <SignUp />
      <p>
        Already have an account? <NavLink to="/login">Sign in</NavLink>
      </p>
    </div>
  )
}
