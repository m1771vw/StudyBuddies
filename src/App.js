import React, { Component } from 'react';
import './App.css';
import CreateView from './components/CreateView';
import ViewSet from './components/ViewSet';
import UserHeader from './components/UserHeader';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';
import FlashCards from './data/flashcards';

import { DASHBOARD, CREATE_VIEW, VIEW_SET, QUIZ, WRONG_ANSWER, CORRECT_ANSWER } from './constants'
import { selectFlashCards, chooseRightCard, scrambleArray } from './helpers'
var randomNumber = Math.floor(Math.random() * 4)
// const selectFlashCards = (cards) => {
//   let newArray = []
//   cards = scrambleArray(cards)
//   cards = chooseRightCard(cards)
//   newArray = cards.slice(0, 4)
//   return newArray
// }

// const chooseRightCard = (cards) => {

//   for(let i = 0; i < cards.length;i++){
//       cards[i]['answer'] = WRONG_ANSWER
//   }
//   cards[randomNumber]['answer'] = CORRECT_ANSWER
//   return cards
// }

// const scrambleArray = (cards) =>{
//   for (let i = cards.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [cards[i], cards[j]] = [cards[j], cards[i]];
//   }
//   return cards;
// }

class App extends Component {
  state = {
    pageName: DASHBOARD,
    flashCardSets: FlashCards,
    selectedQuizCards: [],
    selectedCardSet: []
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
  setupQuiz = () => {
    this.setState({
      pageName: QUIZ,
      quizFlashCards: this.state.quizFlashCards,
      selectedQuizCards: selectFlashCards(this.state.selectedCardSet.cards, randomNumber)
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
        return(<Quiz randomNumber={randomNumber} selectedQuizCards={this.state.selectedQuizCards}/>)  
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
