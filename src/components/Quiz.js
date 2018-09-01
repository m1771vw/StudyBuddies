import React, { Component } from 'react';
import { func, array } from 'prop-types';
import { scrambleCards, selectQuizCards } from '../helpers';
import {QUIZ_RESULTS} from '../constants/'
class Quiz extends Component {
    state={
        userHasChosen: false,
        shuffledCardSet: scrambleCards(this.props.selectedCardSet.cards), 
        quizCardSet: (selectQuizCards(this.props.selectedCardSet.cards, 0)),
        cardSetIndex: 0,
        endOfSetReached: false
    }
    answerClicked = () => {
        this.setState({
            userHasChosen: true
        })
    }
    getNewSetOfCards = (cards, cardSetIndex) => {
        let newQuizArray = selectQuizCards(cards, cardSetIndex)
        this.setState({
            quizCardSet: newQuizArray
        })
    }
    showNextQuestion = () => {
        if(this.state.cardSetIndex === this.state.shuffledCardSet.length-1){
            this.setState({
                cardSetIndex: 0,
                userHasChosen: true
            })
            this.props.changePageName(QUIZ_RESULTS)
        } else {
            this.getNewSetOfCards(this.state.shuffledCardSet, this.state.cardSetIndex+1)
            this.setState({
                userHasChosen: false,
                cardSetIndex: this.state.cardSetIndex + 1
            })
        }
    }
    render() {
    return (
        <div>
            <div className="level">
                <div className="quiz-question-flex-container level-item">
                    <div className='level-item level-left return-to-view-button'>
                            <button onClick={() => {this.props.selectCardSet(this.props.selectedCardSetIndex)}} className='button is-primary'>Return to View</button>
                        </div>
                    <div className=" box flashcard-box quiz-term-box has-text-centered">
                        <h1>Term:</h1>
                        <h1> {this.state.shuffledCardSet[this.state.cardSetIndex].term}</h1>
                    </div>
                    <div className=" flashcard-counter">
                        <h1>{this.state.cardSetIndex+1} / {this.state.shuffledCardSet.length}</h1>
                    </div>
                </div>
            </div>
                
            <div className='level level-flashcards'>
                {this.state.userHasChosen? 
                this.state.quizCardSet.map((card,index) => {
                    return(
                        <div key={card.term+index} className='level-item level-right'>
                        <div onClick={this.showNextQuestion} style={{border: this.state.quizCardSet[index].answer}} className="box flashcard-box has-text-centered">
                            <h1>Definition: </h1>
                            <h1>{card.definition}</h1>
                        </div>
                    </div> 
                    )
                }): this.state.quizCardSet.map((card,index) => {
                    return(
                        <div key={card.term+index} className='level-item level-right'>
                        <div onClick={this.answerClicked} className="box flashcard-box has-text-centered">
                            <h1>Definition: </h1>
                            <h1>{card.definition}</h1>
                        </div>
                    </div>
                )})}
            
            </div>
        </div>
    )};
}

Quiz.propTypes = {
    selectedFlashCards: array,
    changePageName: func,
};

export default Quiz;