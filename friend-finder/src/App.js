import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      App
    </Provider>
  );
}

export default App;
