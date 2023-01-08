import React, {useState} from 'react'

type Button = {
  title: string
  handleClick(email: string, pass: string): void
}

export const Form: React.FC<Button> = ({title, handleClick}) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <button onClick={() => handleClick(email, pass)}>{title}</button>
    </div>
  )
}
