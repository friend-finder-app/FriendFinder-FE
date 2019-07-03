import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import Logo from '../images/LogoFF.png'


const LandingNavbar = props => {
  return (

      <nav className="nav-bar">
      <div className="container">
        <ul className = "logo-nav-link"> 
          <li><img src = {Logo} width = "45em" alt = "Logo"/> </li>
          <li className='nav-title'><Link to="/" >Friend Finder</Link></li>
        </ul>
        <ul className="nav-links">
          <li><Link to="/signup">SignUp</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        </div>
      </nav>

  )
}

LandingNavbar.propTypes = {

}

export default LandingNavbar
