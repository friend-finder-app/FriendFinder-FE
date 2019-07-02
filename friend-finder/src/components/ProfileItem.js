import React from 'react'
import PropTypes from 'prop-types'
import { Link , Redirect} from "react-router-dom"


const ProfileItem = props => {
  const youClicked = (id) => {
    console.log("hi");
  }

  return (
    
    <div className="small-profiles" >
      <img src={props.image} onClick={() => youClicked("abc")}/>
      {/* <Link to={`/single-profile/aijk`}> */}
      <div>
      <Link to={`/single-profile/aijk`}>
        <h2>{props.name}</h2>
        <small>{props.location}</small>
        <p>{props.hobbies}</p>
        </Link>
      </div>
      {/* </Link> */}
    </div>

  )
}

ProfileItem.propTypes = {

}

export default ProfileItem
