import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import Logo from '../images/LogoFF.png'


const Navbar = props => {
  return (

      <nav className="nav-bar">
      <div className="container">
        <div><img src = {Logo} width = "45em" alt = "Logo"/> </div>
        <div><Link to="/">Finder</Link></div>
        <ul className="nav-links">
          <li><Link to="/friend-requests">Requests</Link></li>
          <li><Link to="/friends">Friends</Link></li>
          <li><Link to="/profiles">Profiles</Link></li>
          <li><Link to="/signup">SignUp</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        </div>
      </nav>

  )
}

Navbar.propTypes = {

}

export default Navbar
