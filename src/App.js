import React from 'react';
import './App.css';
import {Switch, Route,  } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';

class App extends React.Component {
  render(){
      return (
        <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
        </>
    );
  }
}

export default App;
