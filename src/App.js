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
    isCreateViewClicked: false,
    isViewSetClicked: false,
    isDashboardClicked: true
  }
  viewViewSet = () => {
    this.setState({
      isViewSetClicked: true,
      isCreateViewClicked: false
    })
  }
  viewCreateView = () => {
    this.setState({
      isCreateViewClicked: true,
      isViewSetClicked: false
    })
  }

  changePage = pageName => {
    switch(pageName){
      case DASHBOARD:
        return(<Dashboard />)
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
        {
          this.state.isCreateViewClicked
        ? <CreateView />
        : this.state.isViewSetClicked 
        ? <ViewSet /> 
        : <Dashboard viewViewSet={this.viewViewSet} viewCreateView={this.viewCreateView}
        />
        }
        

      </div>
    );
  }
}

export default App;
