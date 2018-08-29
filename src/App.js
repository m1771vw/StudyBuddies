import React, { Component } from 'react';
import './App.css';
import CreateView from './components/CreateView';
import ViewSet from './components/ViewSet';
import UserHeader from './components/UserHeader';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';

import { DASHBOARD, CREATE_VIEW, VIEW_SET, QUIZ } from './constants'

class App extends Component {
  state = {
    pageName: CREATE_VIEW
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
        return(<ViewSet changePageName={this.changePageName}/>)
      case QUIZ:
        return(<Quiz />)  
      default:
        return null;
    }
  }
  render() {
    return (
      <div>
        <UserHeader 
          changePageName={this.changePageName}
        /> 
        <div className="container main-content">
          {this.setPage(this.state.pageName)}
        </div>
      </div>
    );
  }
}

export default App;
