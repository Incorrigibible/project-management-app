import React from 'react'
import {Form} from '../Form/Form'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

export const SignUp: React.FC = () => {
  const handleSignUp = (email: string, pass: string) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, pass)
      .then((res) => {
        if (res) {
          console.log(res.user)
        }
      })
      .catch(console.error)
  }

  return <Form title="sign up" handleClick={handleSignUp} />
}
