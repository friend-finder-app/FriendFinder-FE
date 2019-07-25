import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Dummy from "../images/ProfileDummy.png";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getUserinfo } from "../actions";
import ImgUpload from './ImgUpload.jsx'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class SideBar extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      profileImg: {},
      secondSlide:{},
      thirdSlide: {}
    }
  
  }


   async componentDidMount() {

      await this.props.getUserinfo(this.props.userInfo.id);
      this.setState({profileImg: this.props.userInfo})
      // const profilePhoto = await this.props.userInfo.images[0].imageData
      this.setState({profileImg: this.props.userInfo.images[0].imageData})
      this.setState({secondSlide: this.props.userInfo.images[1].imageData})
      this.setState({thirdSlide: this.props.userInfo.images[2].imageData})
 
  }



  render(){
    if (!this.props.userInfo) {
      return <span>Loading...</span>;
  }
  return (

    <div className="side-bar">
      <div className="side-bar-img">
      <h2>Welcome {this.props.userInfo.firstName} </h2>
      <Carousel>
                <div>
                <img src= {`https://friendfinder-be.herokuapp.com/${this.state.profileImg}`} />     
 
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src= {`https://friendfinder-be.herokuapp.com/${this.state.secondSlide}`} />   
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <img src= {`https://friendfinder-be.herokuapp.com/${this.state.thirdSlide}`} />   
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
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
