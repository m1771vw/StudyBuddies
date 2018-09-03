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
        endOfSetReached: false,
        selectedCardIndex: -1
    }
    answerClicked = index => {
        console.log("Card: " + index + " has been clicked.")
        this.setState({
            userHasChosen: true,
            selectedCardIndex: index
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
                cardSetIndex: this.state.cardSetIndex + 1,
                selectedCardIndex: -1
            })
        }
    }

    render() {
        let correctCard = "box flashcard-box has-text-centered is-correct-card";
        let wrongCard = "box flashcard-box has-text-centered is-wrong-card";
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
                {   // Check if the user has chosen and if answer is true
                    this.state.userHasChosen && this.state.quizCardSet[this.state.selectedCardIndex].answer?
                    this.state.quizCardSet.map((card, index) => {
                        if(card.answer){
                            return(
                                <div key={card.term+index} className='level-item level-right'>
                            <div onClick={this.showNextQuestion} className={correctCard}>
                                <h1>Definition: </h1>
                                <h1>{card.definition}</h1>
                            </div>
                        </div>
                            )
                        } else {
                            return(
                        <div key={card.term+index} className='level-item level-right'>
                            <div onClick={this.showNextQuestion} className='box flashcard-box has-text-centered'>
                                <h1>Definition: </h1>
                                <h1>{card.definition}</h1>
                            </div>
                        </div>
                         )
                        }
                       
                    }) : this.state.userHasChosen && !this.state.quizCardSet[this.state.selectedCardIndex].answer?
                        this.state.quizCardSet.map((card, index) => {
                        if(card.answer) {
                            return(
                                <div key={card.term+index} className='level-item level-right'>
                            <div onClick={this.showNextQuestion} className={correctCard}>
                                <h1>Definition: </h1>
                                <h1>{card.definition}</h1>
                            </div>
                        </div>
                            )
                        } else if(this.state.quizCardSet.indexOf(card) == this.state.selectedCardIndex) {
                            return(
                                <div key={card.term+index} className='level-item level-right'>
                            <div onClick={this.showNextQuestion} className={wrongCard}>
                                <h1>Definition: </h1>
                                <h1>{card.definition}</h1>
                            </div>
                        </div>
                            )
                        } else
                        return(
                            <div key={card.term+index} className='level-item level-right'>
                            <div onClick={this.showNextQuestion} className='box flashcard-box has-text-centered'>
                                <h1>Definition: </h1>
                                <h1>{card.definition}</h1>
                            </div>
                        </div>
                        )
                    })
                    /* this.state.quizCardSet[this.state.selectedCardIndex].answer?
                    <div key={this.state.quizCardSet[this.state.selectedCardIndex].term} className='level-item level-right'>
                            <div onClick={this.showNextQuestion} className={correctCard}>
                                <h1>Definition: </h1>
                                <h1>{this.state.quizCardSet[this.state.selectedCardIndex].definition}</h1>
                            </div>
                        </div>
                        : this.state.userHasChosen */
                :  // If user hasn't picked anything yet, render everything
                this.state.quizCardSet.map((card,index) => {
                    return(
                        <div key={card.term+index} className='level-item level-right'>
                        <div onClick={() => {this.answerClicked(index)}} className="box flashcard-box has-text-centered">
                            <h1>Definition: </h1>
                            <h1>{card.definition}</h1>
                        </div>
                    </div>
                )})}
                {/* this.state.quizCardSet.map((card,index) => {
                    return( // FIgure it out here
                        card.answer 
                        ? <div key={card.term+index} className='level-item level-right'>
                            <div onClick={this.showNextQuestion} className={correctCard}>
                                <h1>Definition: </h1>
                                <h1>{card.definition}</h1>
                            </div>
                        </div> 
                        : <div key={card.term+index} className='level-item level-right'>
                            <div onClick={this.showNextQuestion} className={wrongCard}>
                                <h1>Definition: </h1>
                                <h1>{card.definition}</h1>
                            </div>
                        </div> 
                    ) // Don't worry about down here
                }) 
                 : this.state.quizCardSet.map((card,index) => {
                    return(
                        <div key={card.term+index} className='level-item level-right'>
                        <div onClick={() => {this.answerClicked(index)}} className="box flashcard-box has-text-centered">
                            <h1>Definition: </h1>
                            <h1>{card.definition}</h1>
                        </div>
                    </div>
                )})} */}
            
            </div>
        </div>
    )};
}

Quiz.propTypes = {
    selectedFlashCards: array,
    changePageName: func,
};

export default Quiz;