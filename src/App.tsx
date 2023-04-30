import React from 'react';
import logo from './logo.svg';
import './App.css';
import IndividualMovie from './movies/IndividualMovie';
import { movieDTO } from './movies/Movies.model';
import MoviesList from './movies/MoviesList';

function App() {
  const inTheatres: movieDTO[] =[{
    id : 1,
    title : 'Demon Slayer: Mugen Train Arc',
    poster : 'https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg'
  },
  {
    id : 2,
    title : 'Your Name',
    poster : 'https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_FMjpg_UX1000_.jpg'
  },
  {
    id : 3,
    title : 'Spirited Away',
    poster : 'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
  },
  {
    id : 4,
    title : 'Silent Voice',
    poster : 'https://m.media-amazon.com/images/M/MV5BZGRkOGMxYTUtZTBhYS00NzI3LWEzMDQtOWRhMmNjNjJjMzM4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
  }];

  const upcomingReleases:movieDTO[] = [{
    id : 5,
    title : 'Jujutsu Kaisen 0',
    poster : 'https://m.media-amazon.com/images/M/MV5BODM0NmVjMzUtOTJhNi00N2ZhLWFkYmMtYmZmNjRiY2M1YWY4XkEyXkFqcGdeQXVyOTgxOTA5MDg@._V1_FMjpg_UX1000_.jpg'
  }];

  return (
    <>
    <h3>In Theaters</h3>
    <MoviesList movies={inTheatres}/>
    <h3>Upcoming Releases</h3>
    <MoviesList movies={upcomingReleases}/>
    </>
  );
}

export default App;
