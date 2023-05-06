import React, {  } from 'react';
import './App.css';
import Menu from './Menu';
import routes from './RouteConfig';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import configureValidations from './Validation';

configureValidations()

function App() {

  return (
    <BrowserRouter>
      <Menu/>
      <div className='container'>
        <Routes>
          {routes.map(route => 
            <Route path={route.path} key={route.path} element={<route.component/>}/>)}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
