import React from 'react'
import './App.css';
import { AppProvider } from './context/AppContext';
import Router from './routing/Router';


const App = () => {
  return (
      <AppProvider>
        <Router/>
      </AppProvider>
  )
}

export default App