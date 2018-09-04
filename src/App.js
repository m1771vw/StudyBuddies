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
import ProfileView from './components/ProfileView';
import FlashCards from './data/flashcards';
import Users from './data/users';
import EditView from './components/EditView';

import { HOMEPAGE, LOGIN_VIEW, SIGNUP_VIEW, PROFILE_VIEW, DASHBOARD, CREATE_VIEW, VIEW_SET, QUIZ, QUIZ_RESULTS, EDIT } from './constants'


class App extends Component {
  state = {
    pageName: HOMEPAGE,
    userList: Users,
    flashCardSets: FlashCards, // All the Cards
    // selectedCardSet: [], // Selected card set of cards
    selectedCardSet: FlashCards[1], // Dummy data to have Quiz as Start Up page
    userLoggedIn: true,
    currentUser: [],    
    selectedCardSetIndex: 0,
    scoreCorrect: 0,
    scoreMissed: 0
  }

  /**
   * Edit function that changes 'this.state.flashCardSets' to include the new collection
   * 
   * Requires two input: setname, new collection to insert
   * 
   * use 'setname' to find index to update
   * 
   * Meant for 'EditView.js'
   */

  updateCardSet = cards => {

    let tempSet = [
      ...this.state.flashCardSets.slice(0, this.state.selectedCardSetIndex),
      cards,
      ...this.state.flashCardSets.slice(this.state.selectedCardSetIndex + 1)
    ];

    this.setState({
      flashCardSets: tempSet
    }, ()=>{this.selectCardSet(this.state.selectedCardSetIndex)})
  }

  authenticateUser = user => {
    if (this.state.userList.findIndex(x => x.email === user.email) > -1
      && this.state.userList.findIndex(x => x.password === user.password) > -1) {
      console.log("User logged in!")
      this.setState({ userLoggedIn: true, pageName: DASHBOARD, currentUser: this.state.userList[this.state.userList.findIndex(x => x.email === user.email)]});
    } else {
      alert("Email or Password incorrect! Please try again.")
      this.setState({ userLoggedIn: false });
    }
  }
  logOut = () => {
    this.setState({
      pageName: HOMEPAGE,
      userLoggedIn: false,
      currentUser: []
    })
  }

  addToUser = user => {
    let newUser = [...this.state.userList, user]
    this.setState({
      userList: newUser,
    }, ()=>{this.changePageName(LOGIN_VIEW)})
  }

  addToCards = card => {
    let newCards = [...this.state.flashCardSets, card]
    this.setState({
      flashCardSets: newCards,
    }, ()=>{this.selectCardSet(this.state.flashCardSets.length-1)})
  }

  changePageName = name => {
    this.setState({
      pageName: name
    })
  }

  selectCardSet = index => {
    this.setState({
      pageName: VIEW_SET,
      selectedCardSet: this.state.flashCardSets[index],
      selectedCardSetIndex: index
    })
  }
  setupQuiz = (QUIZ, cardSet) => {
    this.setState({
      pageName: QUIZ,
      selectedCardSet: cardSet
    })
  }
  setupQuizResults = (scoreCorrect, scoreMissed) => {
    this.setState({
      scoreCorrect: scoreCorrect,
      scoreMissed: scoreMissed
    }, () => {this.changePageName(QUIZ_RESULTS )})
  }
  setPage = pageName => {
    switch (pageName) {
      case HOMEPAGE:
        return (<HomePage changePageName={this.changePageName} />)
      case SIGNUP_VIEW:
        return (<SignupView
          changePageName={this.changePageName}
          addToUser={this.addToUser} />)
      case LOGIN_VIEW:
        return (<LoginView
          changePageName={this.changePageName}
          authenticateUser={this.authenticateUser}
        />)
      case DASHBOARD:
        return(<Dashboard flashCardSets={this.state.flashCardSets}
                changePageName={this.changePageName}
                selectCardSet={this.selectCardSet}
                currentUser={this.state.currentUser}
                />)
      case PROFILE_VIEW:
        return(<ProfileView 
                changePageName={this.changePageName}
                currentUser={this.state.currentUser}
                logOut={this.logOut}
                />)
      case CREATE_VIEW:
        return(<CreateView 
        addToCards={this.addToCards}
        flashCardSets={this.state.flashCardSets}
        changePageName={this.changePageName}
        />)
      case VIEW_SET:
        return (<ViewSet changePageName={this.changePageName}
          selectedCardSet={this.state.selectedCardSet}
          setupQuiz={this.setupQuiz}
        />)
      case QUIZ:
        return(<Quiz
        selectCardSet={this.selectCardSet}
        selectedCardSet={this.state.selectedCardSet} 
        changePageName={this.changePageName}
        selectedCardSetIndex={this.state.selectedCardSetIndex}
        setupQuizResults={this.setupQuizResults}
        />)  
      case QUIZ_RESULTS:
        return (<QuizResults
          changePageName={this.changePageName}
          selectedCardSet={this.state.selectedCardSet}
          scoreCorrect={this.state.scoreCorrect}
          scoreMissed={this.state.scoreMissed}
        />)
      case EDIT:
            return(<EditView 
            selectCardSet={this.selectCardSet}
            selectedCardSet={this.state.selectedCardSet}
            selectedCardSetIndex={this.state.selectedCardSetIndex}
            updateCardSet={this.updateCardSet}
            
          />)
      default:
        return <h1>404 Not Found</h1>;
    }
  }
  render() {
    return (
      <div>
        {this.state.userLoggedIn
        ? 
          <div>
            <UserHeader 
            changePageName={this.changePageName}
            flashCardSets={this.state.flashCardSets}
            selectCardSet={this.selectCardSet}
            /> 
            <div id='body-content'>
              <div className="container is-fluid main-content"> 
              {this.setPage(this.state.pageName)}
            </div>
            </div>
         </div> 
        : <div>
          <HomePageHeader 
            changePageName={this.changePageName}/>
            {this.setPage(this.state.pageName)}
        </div>
       }
        
        
      </div>
    );
  }
}

export default App;
