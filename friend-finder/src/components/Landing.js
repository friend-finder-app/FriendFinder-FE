import React from 'react'
import PropTypes from 'prop-types'
import Navbar from "./Navbar"
import background from '../images/friendUnsplashed.jpg'
import Logo from '../images/LogoFF.png'
import { Link } from "react-router-dom"
import LandingNavbar from './LandingNavBar'
const Landing = props => {


  return (
    <div>
  <div className = 'landingContainer'>
    <img src = {background} className = 'landingImg' alt ='picnic on mountain'/>
      <div className = 'innertext'>
        <div className = 'Logo-landing'> 
          <img src = {Logo} alt = 'app logo' className = 'landing-logo'/>
          <h1 className = 'logo-title'> Friend Finder</h1>
        </div>
        <div className= 'landing-description'> 
        <div className = 'landing-text'>
          <h1> Meet your new best friend</h1>
            <p> Match with people that get your vibe, and meet awesome people.</p>
        </div>
        <div className = 'buttons-landing'> 
          <Link  className = 'slide this'  to = '/login'>Login</Link>
          <Link  className = 'cover this' to = '/signup'>Sign Up</Link>   
        </div>
        </div>
      </div>
  </div>
    
  </div>
  )
}

Landing.propTypes = {

}

export default Landing
