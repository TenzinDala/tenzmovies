import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='container-fluid'>
            <a className="navbar-brand" href="/">Tenz Movies</a>
            <div className="collapse navbar-collapse" >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                     <Link className="nav-link" to="/genres">Genres</Link> 
                    </li>
                    <li className="nav-item active">
                     <Link className="nav-link" to="/movie/filter">Filter Movies</Link> 
                    </li>
                    <li className="nav-item active">
                     <Link className="nav-link" to="/actors">Actors</Link> 
                    </li>
                    <li className="nav-item active">
                     <Link className="nav-link" to="/movietheaters">Movie Theaters</Link> 
                    </li>
                    <li className="nav-item active">
                     <Link className="nav-link" to="/movies/create">Create a Movie</Link> 
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}
