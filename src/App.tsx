import React, {  } from 'react';
import './App.css';
import Menu from './Menu';
import route from './RouteConfig';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Menu/>
      <div className='container'>
        <Routes>
          {route.map(route => 
            <Route path={route.path} key={route.path} element={<route.component/>}/>)}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
