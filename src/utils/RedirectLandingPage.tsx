import React from 'react'
import { Navigate } from 'react-router-dom'

export default function RedirectLandingPage() {
  return (
    <>
    <Navigate to={'/'}/>
    </>
  )
}
