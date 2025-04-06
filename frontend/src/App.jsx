import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUpScreen from './screens/SignUpScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import TransactionScreen from './screens/TransactionScreen'
import NotFoundScreen from './screens/NotFoundScreen'

const App = () => {
  return <>
      <Routes>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/login' element={<LoginScreen/>} />
        <Route path='/signup' element={<SignUpScreen/>} />
        <Route path='/transaction/:id' element={<TransactionScreen/>} />
        <Route path='*' element={<NotFoundScreen/>} />
      </Routes>
  </>
}

export default App