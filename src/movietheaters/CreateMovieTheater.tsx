import React from 'react'
import MovieTheaterForm from './MovieTheaterForm'

export default function CreateMovieTheater() {
  return (
    <>
    <div>CreateMovieTheater</div>
    <MovieTheaterForm 
      model={{name: ""}}
      onSubmit={values => console.log(values)}
    />
    </>
  )
}
