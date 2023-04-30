import React from 'react'
import { movieDTO } from './Movies.model'
import IndividualMovie from './IndividualMovie'
import css from './MovieList.module.css'

export default function MoviesList(props:MoviesListProps) {
  return (
    <div className={css.div}>
        {props.movies.map(movie => <IndividualMovie {...movie} key={movie.id}/>)}
    </div>
  )
}

interface MoviesListProps {
    movies : movieDTO[]
}
