import React, { Component } from 'react';
import { func, object, number } from 'prop-types';
import { scrambleCards, selectQuizCards } from '../helpers';

class Quiz extends Component {
    state = {
        userHasChosen: false,
        shuffledCardSet: scrambleCards(this.props.selectedCardSet.cards), 
        quizCardSet: selectQuizCards(this.props.selectedCardSet.cards, 0),
        cardSetIndex: 0,
        endOfSetReached: false,
        selectedCardIndex: 0,
        scoreCorrect: 0,
        scoreMissed: 0
    }

    answerClicked = index => {
        this.setState({
            userHasChosen: true,
            selectedCardIndex: index
        });
    }

    getNewSetOfCards = (cards, cardSetIndex) => {
        let newQuizArray = selectQuizCards(cards, cardSetIndex)
        this.setState({
            quizCardSet: newQuizArray
        });
    }

    showNextQuestion = correct => {
        const checkReachedEndOfCardSet = this.state.cardSetIndex === this.state.shuffledCardSet.length - 1
        if(checkReachedEndOfCardSet) {
            if(correct){
                this.setState({
                    cardSetIndex: 0,
                    userHasChosen: true,
                    scoreCorrect: this.state.scoreCorrect + 1
                }, () => {this.props.setupQuizResults(this.state.scoreCorrect, this.state.scoreMissed)});
            } else {
                this.setState({
                    cardSetIndex: 0,
                    userHasChosen: true,
                    scoreMissed: this.state.scoreMissed + 1
                }, () => {this.props.setupQuizResults(this.state.scoreCorrect, this.state.scoreMissed)});
            } 
        } else if (correct) {
            this.getNewSetOfCards(this.state.shuffledCardSet, this.state.cardSetIndex+1);
            this.setState({
                userHasChosen: false,
                cardSetIndex: this.state.cardSetIndex + 1,
                selectedCardIndex: -1,
                scoreCorrect: this.state.scoreCorrect + 1
            });
        } else {
            this.getNewSetOfCards(this.state.shuffledCardSet, this.state.cardSetIndex+1);
            this.setState({
                userHasChosen: false,
                cardSetIndex: this.state.cardSetIndex + 1,
                selectedCardIndex: -1,
                scoreMissed: this.state.scoreMissed + 1
            });
        }
    }

    quizTopHalf = () => {
        let cardStatus = <h1>{this.state.cardSetIndex + 1} / {this.state.shuffledCardSet.length}</h1>
        return(
            <div className="level">
                <div className="quiz-question-flex-container level-item">
                    <div className='level-item level-left return-to-view-button'>
                            <button onClick={() => {this.props.selectCardSet(this.props.selectedCardSetIndex)}} className='button is-watermelon'>Return to View</button>
                        </div>
                    <div className=" box flashcard-box quiz-term-box term-text">
                        <h1> {this.state.shuffledCardSet[this.state.cardSetIndex].term}</h1>
                    </div>
                    <div className=" flashcard-counter">
                        {cardStatus}
                        <h1 className="green-text">Correct: {this.state.scoreCorrect}</h1>
                        <h1 className="red-text">Missed: {this.state.scoreMissed}</h1>
                    </div>
                </div>
            </div>
        )
    }

    quizBottomHalf = () => {
        return(
            <div className='level flashcard-answer-container'>
                {   
                    this.state.userHasChosen && this.state.quizCardSet[this.state.selectedCardIndex].answer
                    ? this.answerIsCorrect()
                    : this.state.userHasChosen && !this.state.quizCardSet[this.state.selectedCardIndex].answer
                    ? this.answerIsMissed()
                    : this.noAnswerSelected()
                }
            </div>
        )
    }

    answerIsMissed = () => {
        let correctCard = "box flashcard-box has-text-centered quiz-flashcard-wordwrap is-correct-card";
        let wrongCard = "box flashcard-box has-text-centered quiz-flashcard-wordwrap is-wrong-card";
        return(
            this.state.quizCardSet.map((card, index) => {
                if(card.answer) {
                    return(
                        <div key={card.term+index} className='level-item level-right'>
                    <div onClick={ () => {this.showNextQuestion(false)}} className={correctCard}>
                        <h1>Definition: </h1>
                        <h1>{card.definition}</h1>
                    </div>
                </div>
                    )
                } else if(this.state.quizCardSet.indexOf(card) === this.state.selectedCardIndex) {
                    return(
                        <div key={card.term+index} className='level-item level-right'>
                    <div onClick={ () => {this.showNextQuestion(false)}} className={wrongCard}>
                        <h1>Definition: </h1>
                        <h1>{card.definition}</h1>
                    </div>
                </div>
                    )
                } else
                return(
                    <div key={card.term+index} className='level-item level-right'>
                    <div onClick={ () => {this.showNextQuestion(false)}} className='box flashcard-box has-text-centered quiz-flashcard-wordwrap'>
                        <h1>Definition: </h1>
                        <h1>{card.definition}</h1>
                    </div>
                </div>
                )
            }   
        ))
    }

    answerIsCorrect = () => {
        let correctCard = "box flashcard-box has-text-centered quiz-flashcard-wordwrap is-correct-card";
        return(
            this.state.quizCardSet.map((card, index) => {
                if(card.answer){
                    return(
                        <div key={card.term+index} className='level-item level-right'>
                        <div onClick={ () => {this.showNextQuestion(true)}} className={correctCard}>
                        <h1>Definition: </h1>
                        <h1>{card.definition}</h1>
                    </div>
                </div>
                    )
                } else {
                    return(
                        <div key={card.term+index} className='level-item level-right'>
                            <div onClick={() => {this.showNextQuestion(false)}} className='box flashcard-box has-text-centered quiz-flashcard-wordwrap'>
                                <h1>Definition: </h1>
                                <h1>{card.definition}</h1>
                            </div>
                        </div>
                 )
                }
            })
        )
    }

    noAnswerSelected = () => {
        return(
            this.state.quizCardSet.map((card,index) => {
                return(
                    <div key={card.term+index} className='level-item level-right'>
                    <div onClick={() => {this.answerClicked(index)}} className="box flashcard-box has-text-centered quiz-flashcard-wordwrap">
                        <h1>Definition: </h1>
                        <h1>{card.definition}</h1>
                    </div>
                </div>
        )}))
    }

    render() {
    return (
        <div>
            {this.quizTopHalf()}
            {this.quizBottomHalf()}
        </div>
    )};
}

Quiz.propTypes = {
    selectCardSet: func,
    selectedCardSet: object,
    changePageName: func,
    selectedCardSetIndex: number,
    setupQuizResults: func
};

export default Quiz;