import React from 'react'
import Header from './components/Header'
import { Router } from '@reach/router'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import { Flex } from 'rebass'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Flex>
        <Sidebar />
        <Router>
          <Home path='/' />
        </Router>
      </Flex>
    </>
  )
}

export default App
