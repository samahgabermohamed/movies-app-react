/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

export  function Navbar () {
  return (<>
  <nav className="navbar navbar-expand-lg  navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" ><i className="fas fa-film"></i>
</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/movies-list" aria-current="page" >Movies </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/movies-favourite'}>Favourites</Link>
        </li>
      </ul>
      <div className="d-flex nav-item">
      <Link className="nav-link text-light" to='/login'>Login</Link>
      </div>
      <div className="d-flex nav-item">
      <Link className="nav-link text-light" href="#" to="/register"> Register </Link>
      </div>
    </div>
  </div>
</nav> 
  </>);
}
