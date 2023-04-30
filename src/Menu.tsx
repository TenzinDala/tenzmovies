import React from 'react'

export default function Menu() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='container-fluid'>
            <a className="navbar-brand" href="#">Tenz Movies</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/Genres">Genres <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}
