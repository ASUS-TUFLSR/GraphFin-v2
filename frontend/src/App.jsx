import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUpScreen from './screens/SignUpScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import TransactionScreen from './screens/TransactionScreen'
import NotFoundScreen from './screens/NotFoundScreen'
import Header from './components/ui/Header'
import { useQuery } from '@apollo/client'
import { GET_AUTHENTICATED_USER } from './graphql/queries/userQuery'
import { Toaster } from 'react-hot-toast'

const App = () => {

  
  const {loading, data, error} = useQuery(GET_AUTHENTICATED_USER);
  console.log("Loading:",loading)
  console.log("Authenticated User:", data)
  console.log("Error:", error)

  return <>
    {data?.authUser && <Header/>}
      <Routes>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/login' element={<LoginScreen/>} />
        <Route path='/signup' element={<SignUpScreen/>} />
        <Route path='/transaction/:id' element={<TransactionScreen/>} />
        <Route path='*' element={<NotFoundScreen/>} />
      </Routes>
      <Toaster/>
  </>
}

export default App