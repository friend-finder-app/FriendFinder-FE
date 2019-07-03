import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import Landing from "./components/Landing"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Navbar from "./components/Navbar"
import SideBar from "./components/SideBar"
import Profiles from "./components/Profiles"
import Friends from "./components/Friends"
import FriendRequests from "./components/FriendRequests"
import SingleProfile from "./components/SingleProfile"


function App() {
  return (
    <Provider store={store}>
    {/* <Navbar /> */}
    <Router>

      <Navbar />
      <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      
      {/* <Switch> */}
      <div className="main">
        <SideBar />
        <div className="main-stage">
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/friends" component={Friends} />
        <Route exact path="/friend-requests" component={FriendRequests} />
        <Route exact path="/single-profile/:id" component={SingleProfile}/>
        </div>
      </div>
      {/* </Switch> */}
      </Switch>
      </Router>
    </Provider>
  );
}

export default App;
