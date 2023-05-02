import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateGenre() {
  const navigation = useNavigate()
  return (
    <>
    <h3>creating Genre</h3>
    <button className='btn btn-primary' onClick={() => {
      navigation('/genres')
    }}>Save Changes</button>
    </>
  )
}
