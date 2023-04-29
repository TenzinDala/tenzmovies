import React from 'react';
import logo from './logo.svg';
import './App.css';
import IndividualMovie from './movies/IndividualMovie';
import { movieDTO } from './movies/Movies.model';

function App() {
  const testMovie: movieDTO ={
    id : 1,
    title : 'Demon Slayer: Mugen Train Arc',
    poster : 'https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg'
  }

  return (
    <div className="App">
      <IndividualMovie {...testMovie}/>  
    </div>
  );
}

export default App;
