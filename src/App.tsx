import React from 'react'
import Header from './components/Header'
import { Router } from '@reach/router'
import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Home path='/' />
      </Router>
    </div>
  )
}

export default App
