import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Dummy from "../images/ProfileDummy.png";
import Button from "../images/PlusButton.png";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getUserinfo } from "../actions";
import ImgUpload from './ImgUpload.jsx'

class SideBar extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      profileImg: {}
    }
  
  }


   async componentDidMount() {

      await this.props.getUserinfo(this.props.userInfo.id);
      this.setState({profileImg: this.props.userInfo})
      // const profilePhoto = await this.props.userInfo.images[0].imageData
      this.setState({profileImg: this.props.userInfo.images[0].imageData})
   
 
  }



  render(){
  //   if (!this.props.userInfo) {
  //     return <span>Loading...</span>;
  // }
  return (
    <div className="side-bar">
      <div className="side-bar-img">

        <img src= {`https://friendfinder-be.herokuapp.com/${this.state.profileImg}`} />     
 
      <h2>Welcome {this.props.userInfo.firstName} </h2>
        {/* <h3>Edit Profile</h3> */}
      </div>
      <ImgUpload/>
    </div>
  )}
};

SideBar.propTypes = {};

const mapStateToProps = state => {
  return {
    userInfo: state.image.profileData
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getUserinfo }
  )(SideBar)
);
