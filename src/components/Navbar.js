import React from 'react'
import { Link, useLocation, useHistory } from "react-router-dom";

const Navbar = () => {

  let history = useHistory();
  let location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('efficientnotebook_token');
    history.push('/login');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">EfficientNotebook</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
            </li>
          </ul>
          {!localStorage.getItem("efficientnotebook_token")?<form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <Link className="btn btn-outline-success me-2" to="/login" role="button">Login</Link>
            <Link className="btn btn-outline-success me-2" to="/signup" role="button">Signup</Link>
          </form>:<button className="btn btn-outline-danger me-2" onClick={handleLogout}>Logout</button>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
