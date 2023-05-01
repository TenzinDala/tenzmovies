import React, { useEffect, useState } from 'react'
import MoviesList from './MoviesList'
import { landingPageDTO } from './Movies.model';

export default function LandingPage() {

    const [movies,setMovies] = useState<landingPageDTO>({})

    useEffect(()=>{
      const timerID = setTimeout(() => {
        setMovies({
          inTheaters : [{
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
          }],
          upcomingReleases : [{
            id : 5,
            title : 'Jujutsu Kaisen 0',
            poster : 'https://m.media-amazon.com/images/M/MV5BODM0NmVjMzUtOTJhNi00N2ZhLWFkYmMtYmZmNjRiY2M1YWY4XkEyXkFqcGdeQXVyOTgxOTA5MDg@._V1_FMjpg_UX1000_.jpg'
        
          }]
        })
      }, 1000);
  
      return ()=> clearTimeout(timerID) 
    })
  
  
  return (
    <>
            <h3>In Theaters</h3>
            <MoviesList movies={movies.inTheaters}/>
            <h3>Upcoming Releases</h3>
            <MoviesList movies={movies.upcomingReleases}/>

    </>

  )
}
