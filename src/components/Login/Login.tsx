import React from 'react'
import {Form} from '../Form/Form'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {useAppDispatch} from '../../store/hooks'
import {useNavigate} from 'react-router-dom'
import {setUser} from '../../store/slices/sliceRegister'

export const Login: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleLogin = (email: string, pass: string) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, pass)
      .then((res) => {
        if (res.user) {
          navigate('/')
          const user = {
            email: res.user.email,
            id: res.user.uid,
          }
          dispatch(setUser(user))
          document.cookie =
            encodeURIComponent('user') + '=' + encodeURIComponent(123)
        }
      })
      .catch(console.error)
  }

  return <Form title="sign in" handleClick={handleLogin} />
}
