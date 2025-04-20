import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
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

  
  const {loading, data} = useQuery(GET_AUTHENTICATED_USER);
 
  if(loading) return null;

  return <>
    {data?.authUser && <Header/>}
      <Routes>
        <Route path='/' element={ data.authUser ? <HomeScreen/> : <Navigate to={"/login"}/> } />
        <Route path='/login' element={ !data.authUser ? <LoginScreen/> : <Navigate to={"/"}/> } />
        <Route path='/signup' element={ !data.authUser ? <SignUpScreen/> : <Navigate to={"/"}/> } />
        <Route path='/transaction/:id' element={ data.authUser ? <TransactionScreen/> : <Navigate to={"/login"}/>} />
        <Route path='*' element={<NotFoundScreen/>} />
      </Routes>
      <Toaster/>
  </>
}

export default App