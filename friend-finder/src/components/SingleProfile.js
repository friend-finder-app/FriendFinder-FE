import React from 'react'
import PropTypes from 'prop-types'
import noAvatar from "../images/no_avatar.jpg"

let dummy = {
  image: noAvatar,
  name: "Name",
  location: "New York City, NY",
  hobbies: "Run, Walk, Jump"
}


const SingleProfile = props => {
  return (
    <div className="single-profile">
      <img src={dummy.image} />
      <h2>{dummy.name}</h2>
      <small>{dummy.location}</small>
      <p>{dummy.hobbies}</p>
    </div>
  )
}

SingleProfile.propTypes = {

}

export default SingleProfile
