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
            <h1> Meet your new best friend!</h1>
         </div>
          <div className = 'buttons-landing'> 
            <Link  className = 'slide this'  to = '/login'>Login</Link>
            <Link  className = 'cover this' to = '/signup'>Sign Up</Link>   
          </div>
          </div>
        </div>
    </div>
    <div className= 'second-section'>
       <div className = 'second-section-text'>
       <h1>Meet Awesome People</h1>
       <p> Match with people that get your vibe!</p>
       </div>
       <img src = "https://cdn0.iconfinder.com/data/icons/happy-man-human-resource-and-life-style-set-1/91/Happy_Man_Human_Resource__Life_Style_02-512.png" className = 'landing-icons' />
    </div>
    <div className= 'third-section'>
    <img src = "https://www.freepngimg.com/thumb/map/62873-map-computer-location-icon-icons-free-transparent-image-hd.png" className = 'landing-icons' />
       <div className = 'second-section-text'>
       <h1> We match people closest to your location</h1>
       <p> This makes it convenient and quick for people to connect!</p>
       </div>
    </div>

  </div>
  )
}

Landing.propTypes = {

}

export default Landing
