import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import noAvatar from "../images/no_avatar.jpg"
import ProfileItem from "./ProfileItem"
import {getUserinfo} from "../actions"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const dummy = [
  {
    name: "My Friends",
    location: "San Francico, CA",
    hobbies: "Fishing, Swimming, Hiking",
    image: noAvatar
  },
  {
    name: "My Friends",
    location: "San Francico, CA",
    hobbies: "Fishing, Swimming, Hiking",
    image: noAvatar
  },
  {
    name: "My Friends",
    location: "San Francico, CA",
    hobbies: "Fishing, Swimming, Hiking",
    image: noAvatar
  },
  {
    name: "My Friends",
    location: "San Francico, CA",
    hobbies: "Fishing, Swimming, Hiking",
    image: noAvatar
  },
  {
    name: "My Friends",
    location: "San Francico, CA",
    hobbies: "Fishing, Swimming, Hiking",
    image: noAvatar
  },
  {
    name: "My Friends",
    location: "San Francico, CA",
    hobbies: "Fishing, Swimming, Hiking",
    image: noAvatar
  },
  {
    name: "My Friends",
    location: "San Francico, CA",
    hobbies: "Fishing, Swimming, Hiking",
    image: noAvatar
  },
  {
    name: "My Friends",
    location: "San Francico, CA",
    hobbies: "Fishing, Swimming, Hiking",
    image: noAvatar
  }
]

class Friends extends React.Component {


   componentDidMount(){
    this.props.getUserinfo(this.props.userInfo);

  }
 

  // let profileItems = this.props.image.friendRequest

render(){
  // let profileItems = this.props.friends.profileData.friends.map((item, index) => {
  //   return (
  //     <ProfileItem 
  //       key={index}
  //       name={item.firstName}
  //       city={item.city}
  //       image={item.image}
  //       hobbies={item.hobbies}
  //     />
  //   )
  // })
  // console.log(this.props.friends.profileData.friends, "these are my bffs")
  return (
    <>
{
  this.props.friends.profileData.friends.map((item, index) => {
    return (
      <ProfileItem 
        key={index}
        name={item.firstName}
        city={item.city}
        image={item.image}
        hobbies={item.hobbies}
      />
    )
  })

}
    </>
    // <Fragment>
    //   {profileItems}
    // </Fragment>
  )}
  
}

Friends.propTypes = {

}

const mapStateToProps = state => {
  return {
    friends: state.image
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getUserinfo }
  )(Friends)
);
