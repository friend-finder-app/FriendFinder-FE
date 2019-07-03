import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import Dummy from '../images/ProfileDummy.png'
import Button from '../images/PlusButton.png'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {getUserinfo} from '../actions'

const SideBar = props => {

  useEffect(() => {

    const fetchData = async() => {
      await props.getUserinfo(props.userInfo.id)
      console.log(props.ProfileInfo)
    }
    fetchData()
  },[])

  return (
    <div className="side-bar">
      <div className="side-bar-img">
        <img src={Dummy} alt="user-image" />
        <h2>Welcome {props.userInfo.firstName} </h2>
        <h3>Edit Profile</h3>
      </div>
    </div>
  )
}

SideBar.propTypes = {

}

const mapStateToProps = state => {
  return {
    userInfo: state.login,
    ProfileInfo: state.login.ProfileInfo
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    { getUserinfo }
  )(SideBar)
);

