import React from 'react'
import { Link } from 'react-router-dom'

export default function IndexMovieTheaters() {
  return (
    <>
    <div>IndexMovieTheaters</div>
    <Link className='btn btn-primary' to='/movietheaters/create'>Create Movie Theater</Link>
    <Link className='btn btn-primary' to='/movietheaters/edit'>Edit Movie Theater</Link>

    </>
  )
}
