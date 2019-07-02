import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../images/LogoFF.png'

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

  return (
    <div className = "login-container">
      <div className = 'login-top'> 
        <h1> Login </h1>
        <img className = 'login-logo' src = {Logo} width = "45em" alt = "Logo"/> 

      </div>
      <div className = "login-form">
        <form>
          <div className = 'login-form-inputs'> 
          <input
              className = "input-styles"
              value={values.username}
              onChange={handleChange("username")}
              placeholder = "username"
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
              placeholder = "email"
          />     
          <input
              className = "input-styles"
              value={values.password}
              onChange={handleChange("password")}
              placeholder = "password"
              type = "password"
          />     
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
        </form>
      </div>
    </div>
  )
}

Signup.propTypes = {

}

export default Signup
