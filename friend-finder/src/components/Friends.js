import React, { Fragment } from "react";
import PropTypes from "prop-types";
import noAvatar from "../images/no_avatar.jpg";
import ProfileItem from "./ProfileItem";
import { getUserinfo, getFriends } from "../actions";
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
];

class Friends extends React.Component {
  componentDidMount() {
    this.props.getUserinfo(this.props.userInfo);
    this.props.getFriends();
  }

  // let profileItems = this.props.image.friendRequest

  render() {
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
        {this.props.allFriends.map((item, index) => {
          return (
            <ProfileItem
              key={index}
              name={item.firstName}
              city={item.city}
              image={item.imageData}
              hobbies={item.hobbies}
              button="Mesage"
              id={item._id}
            />
          );
        })}
      </>
      // <Fragment>
      //   {profileItems}
      // </Fragment>
    );
  }
}

Friends.propTypes = {};

const mapStateToProps = state => {
  return {
    friends: state.image,
    allFriends: state.profiles.friends
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getUserinfo, getFriends }
  )(Friends)
);
