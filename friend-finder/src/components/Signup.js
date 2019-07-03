import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../images/LogoFF.png'
import Dummy from '../images/ProfileDummy.png'
import axios from 'axios'
import {postSignUp} from '../actions/index'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Signup = props => {

  const [values, setValues] = React.useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    state: '',
    city: '',
    bio: '',
    firstName: '',
    lastName: '',
    age: '',
    hobbies: ''
  })

  const handleChange = prop => e => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const registerHandler = async e => {
    e.preventDefault()
// sending the state values to backend for verification
    await props.postSignUp(values)
    props.history.push('/login')
    // console.log(props.userProfile)
  }

  return (
    <div className = "register-container">
      <div className = 'register-top'> 
        <h1> Sign Up ! </h1>
        <img className = 'register-logo' src = {Logo} width = "45em" alt = "Logo"/> 
      </div>
      <div className = "register-form">
        <form onSubmit = {registerHandler}>
          <div className = 'register-form-inputs'> 
          <input
              className = "input-styles"
              value={values.username}
              onChange={handleChange("username")}
              placeholder = "Username"
          />
          <input
            className = "input-styles"
            value={values.firstName}
            onChange={handleChange("firstName")}
            placeholder = "First name"
          />
          <input
            className = "input-styles"
            value={values.lastName}
            onChange={handleChange("lastName")}
            placeholder = "Last name"
          />
           <input
           type = "number"
            className = "input-styles"
            value={values.age}
            onChange={handleChange("age")}
            placeholder = "Enter Age"
          />
          <input
              className = "input-styles"
              value={values.email}
              onChange={handleChange("email")}
              placeholder = "Email"
              type = "email"
          />     
          <input
              className = "input-styles"
              value={values.password}
              onChange={handleChange("password")}
              placeholder = "password"
              type = "Password"
              pattern=".{8,}" 
              title="Eight or more characters"
          />     
          <input
              className = "input-styles"
              value={values.phone}
              onChange={handleChange("phone")}
              placeholder = "Phone Number"
              pattern=".{10,}" 
              title="Please input your 10 digit phone number"
          />
          <input
              className = "input-styles"
              value={values.state}
              onChange={handleChange("state")}
              placeholder = "Enter State"
          />
          <input
            className = "input-styles"
            value={values.city}
            onChange={handleChange("city")}
            placeholder = "Enter City"
          />
          <textarea
            className = "input-styles"
            value={values.hobbies}
            onChange={handleChange("hobbies")}
            placeholder = "Enter Hobbies, separate by comma. Ex: run, reading, coding"
            cols="40" rows="4"

          />
          <textarea
            className = "input-styles"
            value={values.bio}
            onChange={handleChange("bio")}
            placeholder = "Enter a brief description of yourself"
            cols="40" rows="5"
          />

          </div>
          <button className = "register-button" type = "submit">Register</button>
        </form>
      </div>
    </div>
  )
}

Signup.propTypes = {

}

const mapStateToProps = state => {
  return {
    userProfile: state.userSignUp
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    { postSignUp }
  )(Signup)
);