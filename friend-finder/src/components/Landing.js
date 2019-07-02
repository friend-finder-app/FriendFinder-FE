import React from 'react'
import PropTypes from 'prop-types'
import Navbar from "./Navbar"
import background from '../images/friendUnsplashed.jpg'
import Logo from '../images/LogoFF.png'

const Landing = props => {
  return (
    <div>
  <div className = 'landingContainer'>
    <img src = {background} className = 'landingImg' alt ='picnic on mountain'/>
    <div className = 'landingText'>
    <div className = 'textContainer'> 
      <div className = 'innertext'>
      <div className = 'Logo-landing'> 
      <img src = {Logo} alt = 'app logo' className = 'landing-logo'/>
        <h1 className = 'logo-title'> Friend Finder</h1>
        </div>
        <div className = 'landing-text'>
        <h1> Meet your new best friend</h1>
    
      <div>
        <p> Match with people that get your vibe, and meet awesome people.</p>
      </div>
      </div>
      <div className = 'buttons-landing'> 
        <button  className = 'cover this'  href = '/login'>Login</button>
        <button  className = 'slide this' href = '/signup'>Sign Up</button>   
      </div>
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
