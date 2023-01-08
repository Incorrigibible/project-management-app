import React from 'react'
import Box from '@mui/material/Box'
import './app.scss'
import {Routes, Route} from 'react-router-dom'
import {HomePage} from '../../pages/HomePage'
import {LoginPage} from '../../pages/LoginPage'
import {RegisterPage} from '../../pages/RegisterPage'

export const App: React.FC = () => {
  return (
    <Box component="div" className="container">
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
      </Routes>
    </Box>
  )
}
