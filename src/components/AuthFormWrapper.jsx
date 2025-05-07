import React, { useState } from 'react'
import Signup from '../pages/Signup';
import Login from '../pages/Login';

const AuthFormWrapper = () => {
  const [isSignup, setIsSignup] = useState('login');
  return (
    isSignup === 'signup' ? <Signup switchForm={setIsSignup} /> : <Login switchForm={setIsSignup} />
  )
}

export default AuthFormWrapper