'use client'
//PACKAGE IMPORTS
import { useEffect, useState } from 'react'
import Image from 'next/image'

//INTERNAL IMPORTS
import './loading-submit.scss'
import LoadingMessages from '../loading-messages/LoadingMessages'
import { MTMIconLoading } from '../../../assets'
import { WINDOW } from '../../../services'

const LoadingSubmit = () => {
  const [message, setMessage] = useState(
    LoadingMessages[Math.floor(Math.random() * LoadingMessages.length)],
  )

  useEffect(() => {
    WINDOW.scrollTo(0, 0)
    const interval = setInterval(
      () => setMessage(LoadingMessages[Math.floor(Math.random() * (LoadingMessages.length - 1))]),
      7000,
    )
    return () => {
      clearInterval(interval)
    }
  })

  return (
    <div className="loading-submit__container" data-testid="LoadingSubmit">
      <Image
        src={MTMIconLoading}
        width={250}
        height={250}
        className="loading-submit__logo"
        alt="Loading"
      />
      <p className="loading-submit__text">{message}</p>
    </div>
  )
}

export default LoadingSubmit
