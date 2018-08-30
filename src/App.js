import React, { Component } from 'react';
import './App.css';
import CreateView from './components/CreateView';
import ViewSet from './components/ViewSet';
import UserHeader from './components/UserHeader';
import Dashboard from './components/Dashboard';
import QuizResults from './components/QuizResults';
import Quiz from './components/Quiz';
import HomePage from './components/HomePage';
import HomePageHeader from './components/HomePageHeader';
import LoginView from './components/LoginView';
import SignupView from './components/SignupView';
import FlashCards from './data/flashcards';
import { HOMEPAGE, LOGIN_VIEW, SIGNUP_VIEW, DASHBOARD, CREATE_VIEW, VIEW_SET, QUIZ, QUIZ_RESULTS } from './constants'


class App extends Component {
  state = {
    pageName: SIGNUP_VIEW,
    flashCardSets: FlashCards, // All the Cards
    selectedCardSet: [] // Selected card set of cards
    // selectedCardSet: FlashCards[1] // Dummy data to have Quiz as Start Up page
  }

  addToCards = card => {
    let newCards = [...this.state.flashCardSets, card]
    this.setState({
      flashCardSets: newCards,
      
    })
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
      case HOMEPAGE:
        return(<HomePage changePageName={this.changePageName}/>)
      case SIGNUP_VIEW:
        return(<SignupView changePageName={this.changePageName}/>)
      case LOGIN_VIEW:
        return(<LoginView changePageName={this.changePageName}/>)
      case DASHBOARD:
        return(<Dashboard flashCardSets={this.state.flashCardSets}
                changePageName={this.changePageName}
                selectCardSet={this.selectCardSet}
                />)
      case CREATE_VIEW:
        return(<CreateView addToCards={this.addToCards}/>)
      case VIEW_SET:
        return(<ViewSet changePageName={this.changePageName}
          selectedCardSet={this.state.selectedCardSet}
          setupQuiz={this.setupQuiz}
        />)
      case QUIZ:
        return(<Quiz
        selectedCardSet={this.state.selectedCardSet} 
        changePageName={this.changePageName}
        />)  
      case QUIZ_RESULTS:
          return(<QuizResults 
            changePageName={this.changePageName}
          />)
      default:
        return <h1>404 Not Found</h1>;
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
