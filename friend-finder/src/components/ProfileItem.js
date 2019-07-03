import React from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";

import { addFriend } from "../actions";
import { connect } from "react-redux";

const ProfileItem = props => {
  const youClicked = id => {
    console.log("hi");
  };
  const handleAddFriendButton = id => {
    props.addFriend(id);
    console.log(id);
  };
  let button;
  if (props.button === "Add Friend") {
    button = (
      <button onClick={() => handleAddFriendButton(props.id)}>
        Add Friend
      </button>
    );
  } else if (props.button === "Accept Friend") {
    button = <button>Accept Friend</button>;
  } else if (props.button === "Message") {
    button = <button>Message</button>;
  }
  return (
    <div className="small-profiles">
      <img src={props.image} onClick={() => youClicked("abc")} />
      {/* <Link to={`/single-profile/aijk`}> */}
      <div>
        <Link to={`/single-profile/aijk`}>
          <h2>{props.name}</h2>
          <small>{props.location}</small>
          <p>{props.hobbies}</p>
          {button}
        </Link>
      </div>
      {/* </Link> */}
    </div>
  );
};

ProfileItem.propTypes = {};

export default connect(
  null,
  { addFriend }
)(ProfileItem);
