'use client'
//PACKAGE IMPORTS
import { useEffect, useState } from 'react'

//INTERNAL IMPORTS
import './loading-login.scss'
import LoadingMessages from '../loading-messages/LoadingMessages'

const LoadingLogin = () => {
  const [message, setMessage] = useState(
    LoadingMessages[Math.floor(Math.random() * LoadingMessages.length)],
  )

  useEffect(() => {
    const interval = setInterval(
      () => setMessage(LoadingMessages[Math.floor(Math.random() * (LoadingMessages.length - 1))]),
      7000,
    )
    return () => {
      clearInterval(interval)
    }
  })

  return (
    <div className="loading-login__container">
      <h2 className="loading-login__text">Processing...</h2>
      <p className="loading-login__text">{message}</p>
    </div>
  )
}

export default LoadingLogin
