import React, { Component } from 'react';
import './App.css';
import UserHeader from './components/UserHeader';
import Viewset from './components/ViewSet';
class App extends Component {
  render() {
    return (
      <div id="dashboard">
        {/* <UserHeader /> 
        <h1>Dashboard</h1>
        <button className='button is-primary'>Create Set</button>
        <button className='button is-success'>View Set</button> */}
        <Viewset />
      </div>
    );
  }
}

export default App;
