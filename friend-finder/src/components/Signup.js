import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../images/LogoFF.png'
import Dummy from '../images/ProfileDummy.png'

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
    lastName: ''
  })

  const handleChange = prop => e => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const registerHandler = e => {
    e.preventDefault()
// sending the state values to backend for verification
    console.log(values)
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
          />     
          <div className = 'pic'> 
            <h4 className = 'pic-title'>Upload profile image below</h4>
            <img src = {Dummy} width = "200em" alt = "Logo" className = 'pic-icon'/>
            <input type="image" id = 'pic-upload'/>
          </div>
          <input
              className = "input-styles"
              value={values.phone}
              onChange={handleChange("phone")}
              placeholder = "Phone Number"
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

export default Signup
