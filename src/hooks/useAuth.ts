import {useAppSelector} from '../store/hooks'

export const useAuth = () => {
  const {email, id} = useAppSelector((state) => state.user)

  return {
    isAuth: !!email,
    email,
    id,
  }
}
