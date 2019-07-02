import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Logo from '../images/LogoFF.png'

const Login = props => {

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


  return (
    <div className = "login-container">
      <div className = 'login-top'> 
        <img className = 'login-logo' src = {Logo} width = "45em" alt = "Logo"/> 
        <h2> Login </h2>
      </div>
      <div className = "login-form">
        <form>
          <div className = 'login-form-inputs'> 
          <input
              value={values.username}
              onChange={handleChange("username")}
              placeholder = "username"
          />
          <input
            value={values.firstName}
            onChange={handleChange("firstName")}
            placeholder = "First name"
          />
          <input
            value={values.lastName}
            onChange={handleChange("lastName")}
            placeholder = "Last name"
          />
          <input
              value={values.email}
              onChange={handleChange("email")}
              placeholder = "email"
          />     
          <input
              value={values.password}
              onChange={handleChange("password")}
              placeholder = "password"
              type = "password"
          />     
          <input
              value={values.phone}
              onChange={handleChange("phone")}
              placeholder = "Phone Number"
          />
          <input
              value={values.state}
              onChange={handleChange("state")}
              placeholder = "Enter State"
          />
          <input
            value={values.city}
            onChange={handleChange("city")}
            placeholder = "Enter City"
          />
          <textarea
            value={values.bio}
            onChange={handleChange("bio")}
            placeholder = "Enter a brief description of yourself"
            cols="40" rows="5"
          />
          </div>
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {

}

export default Login
