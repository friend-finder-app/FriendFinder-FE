import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"


const ProfileItem = props => {
  console.log(props)
  const youClicked = () => {
    console.log("hi")
  }

  return (
    
    <div className="small-profiles" >
      <img src={props.image} onClick={youClicked}/>
      <div>
        <h2>{props.name}</h2>
        <small>{props.location}</small>
        <p>{props.hobbies}</p>
      </div>
    </div>

  )
}

ProfileItem.propTypes = {

}

export default ProfileItem
