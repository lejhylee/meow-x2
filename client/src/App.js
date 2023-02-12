import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';

import KaKaoMap from './Components/Map/KaKaoMap';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Register from './Components/Register/Register';

class App extends Component {
  render () {
  return (
  <>
    <BrowserRouter>
      <Header/> 
      <Switch>
        <Route exact path="/" component={KaKaoMap} />
        <Route exact path="/Register" component={Register} />
      </Switch>
    </BrowserRouter>
  </>
  )};
}

export default App;
