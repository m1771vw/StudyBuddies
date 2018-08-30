import React, { Component } from 'react';
import { func, array } from 'prop-types';
import { scrambleCards, selectQuizCards } from '../helpers';

class Quiz extends Component {
    state={
        userHasChosen: false,
        shuffledCardSet: scrambleCards(this.props.selectedCardSet.cards), 
        quizCardSet: (selectQuizCards(this.props.selectedCardSet.cards, 0)),
        cardSetIndex: 0,
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
        this.getNewSetOfCards(this.state.shuffledCardSet, this.state.cardSetIndex+1)
        this.setState({
            userHasChosen: false,
            cardSetIndex: this.state.cardSetIndex + 1
        })
    }
    render() {
    return (
        <div>
            <div className="level level-set">
                <div className="box flashcard-box">
                        <h1>{this.state.shuffledCardSet[this.state.cardSetIndex].term}</h1>
                    </div>
                </div>
            <div className='level level-flashcards'>
                {this.state.userHasChosen? 
                this.state.quizCardSet.map((card,index) => {
                    return(
                        <div key={card.term+index} className='level-item level-right'>
                        <div onClick={this.showNextQuestion} style={{border: this.state.quizCardSet[index].answer}} className="box flashcard-box">
                            <h1>{card.definition}</h1>
                        </div>
                    </div> 
                    )
                }): this.state.quizCardSet.map((card,index) => {
                    return(
                        <div key={card.term+index} className='level-item level-right'>
                        <div onClick={this.answerClicked} className="box flashcard-box">
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