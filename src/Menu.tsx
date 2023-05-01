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
                     <a className="nav-link" href="/genres">Genres</a> 
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}
