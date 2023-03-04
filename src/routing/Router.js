import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../containers/organisms/Home/Home'
import Login from '../containers/organisms/Login/Login'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const Router = () => {
  
  return (

    <BrowserRouter>
        <Routes>
            <Route path="/" element={
                <PublicRoute>
                    <Login/>
                </PublicRoute>
            } />

            <Route path="/movements" element={
                <PrivateRoute>
                    <Home/>
                </PrivateRoute>
            } />    

        </Routes>
    </BrowserRouter>
    
  )
}

export default Router