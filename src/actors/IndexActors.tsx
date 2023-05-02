import React from 'react'
import { Link } from 'react-router-dom'

export default function IndexActors() {
  return (
    <>
    <div>Actors</div>
    <Link className='btn btn-primary' to='/actors/create'>Create Actor</Link>
    <Link className='btn btn-primary' to='/actors/edit'>Edit Actor</Link>
    </>
  )
}
