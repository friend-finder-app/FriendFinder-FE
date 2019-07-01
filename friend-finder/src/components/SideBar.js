import React from 'react'
import PropTypes from 'prop-types'
import noAvatar from "../images/no_avatar.jpg"

const SideBar = props => {
  return (
    <div className="side-bar">
      <div className="side-bar-img">
        <img src={noAvatar} alt="user-image" />
        <h2>Welcome Test </h2>
        <h3>Edit Profile</h3>
      </div>
    </div>
  )
}

SideBar.propTypes = {

}

export default SideBar
