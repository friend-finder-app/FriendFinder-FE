import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import Landing from "./components/Landing"
import Login from "./components/Login"
import Signup from "./components/Signup"


function App() {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
      </Router>
    </Provider>
  );
}

export default App;
