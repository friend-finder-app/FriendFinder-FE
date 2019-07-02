import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../images/LogoFF.png'

const Login = props => {

  
  const [values, setValues] = React.useState({
    email: '',
    password: ''
  })

  const handleChange = prop => e => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const loginHandler = e => {
    e.preventDefault()
// sending the state values to backend for verification
    console.log(values)
  }

  return (
   <div className = "login-container">
      <div className = 'login-top'> 
        <h1> Login </h1>
        <img className = 'register-logo' src = {Logo} width = "45em" alt = "Logo"/> 
      </div>
      <div className = "login-form">
        <form onSubmit = {loginHandler}>
          <div className = 'login-form-inputs'> 
          <input
              className = "input-styles"
              value={values.username}
              onChange={handleChange("email")}
              placeholder = "email"
              type = "email"
          />
          <input
              className = "input-styles"
              value={values.password}
              onChange={handleChange("password")}
              placeholder = "password"
              type = "Password"
          />     
          <button className = "login-button" type = "submit">Enter</button>
          </div>
        </form>
      </div>

    </div>
  )
}

Login.propTypes = {

}

export default Login