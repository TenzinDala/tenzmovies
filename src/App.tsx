import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import IndividualMovie from './movies/IndividualMovie';
import { landingPageDTO, movieDTO } from './movies/Movies.model';
import MoviesList from './movies/MoviesList';
import Menu from './Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndexGenres from './genres/IndexGenres';
import LandingPage from './movies/LandingPage';
import route from './RouteConfig';

function App() {

  return (
    <BrowserRouter>
      <Menu/>
      <div className='container'>
        <Switch>
          {route.map(route => 
            <Route path={route.path} exact={route.exact} key={route.path}>
              <route.component/>
            </Route>)}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
