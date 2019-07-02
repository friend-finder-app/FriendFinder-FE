import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import Dummy from '../images/ProfileDummy.png'
import Button from '../images/PlusButton.png'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const SideBar = props => {

  useEffect(() => {
    console.log(props.userInfo.id)
  },[])

  return (
    <div className="side-bar">
      <div className="side-bar-img">
        <img src={Dummy} alt="user-image" />
        <h2>Welcome Test </h2>
        <h3>Edit Profile</h3>
      </div>
    </div>
  )
}

SideBar.propTypes = {

}

const mapStateToProps = state => {
  return {
    userInfo: state.login
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    // { getUserinfo }
  )(SideBar)
);

