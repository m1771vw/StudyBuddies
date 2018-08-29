import React, { Component } from 'react';
import './App.css';
import CreateView from './components/CreateView';
import ViewSet from './components/ViewSet';
import UserHeader from './components/UserHeader';
import Dashboard from './components/Dashboard';

const DASHBOARD = 'DASHBOARD';
const CREATE_VIEW = 'CREATE';
const VIEW_SET = 'VIEW';

class App extends Component {
  state = {
    pageName: DASHBOARD
  }

  changePageName = name => {
    this.setState({
      pageName: name
    })
  }

  setPage = pageName => {
    switch(pageName){
      case DASHBOARD:
        return(<Dashboard changePageName={this.changePageName}/>)
      case CREATE_VIEW:
        return(<CreateView />)
      case VIEW_SET:
        return(<ViewSet />)
      default:
        return null;
    }
  }
  render() {
    return (
      <div id="dashboard">
        <UserHeader /> 
        {this.setPage(this.state.pageName)}
      </div>
    );
  }
}

export default App;
