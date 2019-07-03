import React, { Fragment } from "react";
import PropTypes from "prop-types";
import noAvatar from "../images/no_avatar.jpg";
import ProfileItem from "./ProfileItem";
import { connect } from "react-redux";
import { getFriendsRequest } from "./../actions/index";

//

class FriendRequests extends React.Component {
  componentDidMount() {
    this.props.getFriendsRequest();
  }
  render() {
    let profileItems = this.props.friendRequest.map((item, index) => {
      return (
        <ProfileItem
          key={index}
          name={item.username}
          location={item.location}
          image={item.imageData}
          hobbies={item.hobbies}
          button="Accept Friend"
          id={item._id}
        />
      );
    });

    return <Fragment>{profileItems}</Fragment>;
  }
}

const mapProps = state => {
  return {
    friendRequest: state.profiles.friendRequest
  };
};

export default connect(
  mapProps,
  { getFriendsRequest }
)(FriendRequests);
