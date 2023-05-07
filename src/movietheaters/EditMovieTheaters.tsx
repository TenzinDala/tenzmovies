import React from 'react'
import MovieTheaterForm from './MovieTheaterForm'

export default function EditMovieTheaters() {
  return (
    <>
    <div>EditMovieTheaters</div>
    <MovieTheaterForm 
      model={{name: "Tenzin"}}
      onSubmit={values => console.log(values)}
    />
    </>
  )
}
