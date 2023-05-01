import React from 'react'
import { Link } from 'react-router-dom'

export default function IndexGenres() {
  return (
    <>
    <div>IndexGenres</div>
    <a className='btn btn-primary' href='/genres/create'>Create Genre</a>
    <a className='btn btn-primary' href='/genres/edit'>Edit Genre</a>
    </>
  )
}
