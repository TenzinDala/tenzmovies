import React from 'react'
import { Link } from 'react-router-dom'

export default function IndexGenres() {
  return (
    <>
    <div>IndexGenres</div>
    <Link className='btn btn-primary' to='/genres/create'>Create Genre</Link>
    <Link className='btn btn-primary' to='/genres/edit'>Edit Genre</Link>
    </>
  )
}
