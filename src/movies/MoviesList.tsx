import React from 'react'
import { movieDTO } from './Movies.model'
import IndividualMovie from './IndividualMovie'
import css from './MovieList.module.css'
import Loading from '../utils/Loading'
import GenericListComponent from '../utils/GenericListComponent'

export default function MoviesList(props:MoviesListProps) {

  //Adding a condition to take undefined into account
  return (
  <GenericListComponent list={props.movies}>
      <div className={css.div}>
          {props.movies?.map(movie => <IndividualMovie {...movie} key={movie.id}/>)}
      </div>
  </GenericListComponent>
    )
 

 
}

interface MoviesListProps {
    movies? : movieDTO[]
}
