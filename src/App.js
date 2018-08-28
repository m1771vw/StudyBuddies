import React, { Component } from 'react';
import './App.css';
import UserHeader from './components/UserHeader';
class App extends Component {
  render() {
    return (
      <div id="dashboard">
        <UserHeader /> 
        <h1>Dashboard</h1>
        <button className='button is-primary'>Create Set</button>
        <button className='button is-success'>View Set</button>
      </div>
    );
  }
}

export default App;
