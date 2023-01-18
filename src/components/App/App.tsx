import React from 'react'
import Box from '@mui/material/Box'
import './app.scss'
import { Header } from '../Header/Header'
import {Routes, Route} from 'react-router-dom'
import { SignUp } from '../pages/SignUp'


export const App: React.FC = () => {
  return (
    <Box component="div" className="container">
      <Header/>
      <Routes>
        <Route element={<SignUp/>} path='/'></Route>
      </Routes>
    </Box>
  )
}
