import React, { Component } from "react";
import PropTypes from "prop-types";
import noAvatar from "../images/no_avatar.jpg";
import ProfileItem from "./ProfileItem";
import { getUserinfo } from "../actions";
import { getMatchFriends } from "./../actions/index";
import { connect } from "react-redux";

class Profiles extends Component {
  componentDidMount() {
    this.props.getMatchFriends(this.props.userInfo.hobbies);
    console.log(this.props.userInfo);
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        {this.props.matches.map(users => (
          <ProfileItem
            key={users._id}
            button="Add Friend"
            name={`${users.firstName}, ${users.lastName}`}
            location={`${users.city},${users.state}`}
            image={users.image}
            hobbies={users.hobbies}
            id={users._id}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.image.profileData,
    usersList: state.users.users,
    matches: state.profiles.matches
  };
};

export default connect(
  mapStateToProps,
  { getMatchFriends }
)(Profiles);

//const dummy = [
//   {
//     name: "James W.",
//     location: "San Francico, CA",
//     hobbies: "Fishing, Swimming, Hiking",
//     image: noAvatar
//   },
//   {
//     name: "James W.",
//     location: "San Francico, CA",
//     hobbies: "Fishing, Swimming, Hiking",
//     image: noAvatar
//   },
//   {
//     name: "James W.",
//     location: "San Francico, CA",
//     hobbies: "Fishing, Swimming, Hiking",
//     image: noAvatar
//   },
//   {
//     name: "James W.",
//     location: "San Francico, CA",
//     hobbies: "Fishing, Swimming, Hiking",
//     image: noAvatar
//   },
//   {
//     name: "James W.",
//     location: "San Francico, CA",
//     hobbies: "Fishing, Swimming, Hiking",
//     image: noAvatar
//   },
//   {
//     name: "James W.",
//     location: "San Francico, CA",
//     hobbies: "Fishing, Swimming, Hiking",
//     image: noAvatar
//   },
//   {
//     name: "James W.",
//     location: "San Francico, CA",
//     hobbies: "Fishing, Swimming, Hiking",
//     image: noAvatar
//   },
//   {
//     name: "James W.",
//     location: "San Francico, CA",
//     hobbies: "Fishing, Swimming, Hiking",
//     image: noAvatar
//   }
// ]
