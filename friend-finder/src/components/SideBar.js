import React from "react";
import PropTypes from "prop-types";
import Dummy from "../images/ProfileDummy.png";
import Button from "../images/PlusButton.png";
import ImgUpload from "./ImgUpload";

const SideBar = props => {
  return (
    <div className="side-bar">
      <div className="side-bar-img">
        <img src={Dummy} alt="user-image" />
        <h2>Welcome Test </h2>
        <h3>Edit Profile</h3>
        <ImgUpload />
      </div>
    </div>
  );
};

SideBar.propTypes = {};

export default SideBar;
