import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bolder fs-2" to="/" style={{fontFamily: 'Playball, cursive'}}>ShopC</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/">Home</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/men">Men</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/women">Women</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/kids">Kids</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link text-white" to="/contact">Contact</Link>
        </li>
      </ul>
      <form class="d-flex">
        <Link to="/login"><button className="btn btn-primary me-3 px-3" type="submit">Log In</button></Link>
        <Link to="/signin"><button className="btn btn-primary" type="submit">Sign In</button></Link>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
