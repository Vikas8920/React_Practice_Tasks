import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <div className="container mt-4">
        <ul className="list-group list-group-horizontal">
            <li className="list-group-item">
            <Link to="/home" className='nav-link text-dark fw-bolder fs-4'>Home</Link>
            </li>
            <li className='list-group-item'>
            <Link to="/users" className='nav-link text-dark fw-bolder fs-4'>Products</Link>
            </li>
        </ul>
   </div>
    </>
  )
}
