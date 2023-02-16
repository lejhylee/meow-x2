import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import '../../App.css';

import KaKaoMap from '../Map/KaKaoMap';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';

class Main extends Component {
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

export default Main;
