import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AuthFormWrapper from './components/AuthFormWrapper'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthFormWrapper />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
