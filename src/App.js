import React, { Component } from 'react';
import './App.css';
import CreateView from './components/CreateView';
import ViewSet from './components/ViewSet';
import UserHeader from './components/UserHeader';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';
import FlashCards from './data/flashcards';
import { DASHBOARD, CREATE_VIEW, VIEW_SET, QUIZ } from './constants'


class App extends Component {
  state = {
    pageName: DASHBOARD,
    flashCardSets: FlashCards, // All the Cards
    selectedCardSet: [] // Selected card set of cards
  }
  changePageName = name => {
    this.setState({
      pageName: name
    })
  }
  selectCardSet = index => {
    this.setState({
      pageName: VIEW_SET,
      selectedCardSet: this.state.flashCardSets[index]
    })
  }
  setupQuiz = (QUIZ, cardSet) => {
    this.setState({
      pageName: QUIZ,
      selectedCardSet: cardSet
    })
  }
  setPage = pageName => {
    switch(pageName){
      case DASHBOARD:
        return(<Dashboard flashCardSets={this.state.flashCardSets}
                changePageName={this.changePageName}
                selectCardSet={this.selectCardSet}
                />)
      case CREATE_VIEW:
        return(<CreateView />)
      case VIEW_SET:
        return(<ViewSet changePageName={this.changePageName}
          selectedCardSet={this.state.selectedCardSet}
          setupQuiz={this.setupQuiz}
        />)
      case QUIZ:
        return(<Quiz
        selectedCardSet={this.state.selectedCardSet} 
        />)  
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
        <div className="container is-fluid main-content">
          {this.setPage(this.state.pageName)}
        </div>
      </div>
    );
  }
}

export default App;
