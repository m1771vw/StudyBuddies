import React, { Component } from 'react';
import { func, array } from 'prop-types';
import { CORRECT_ANSWER } from '../constants/'
import { scrambleArray, selectFlashCards } from '../helpers';

class Quiz extends Component {
    state={
        cardSelectedBorder: '',
        // cards: this.props.selectedQuizCards,
        // selectedCardSet: this.props.selectedCardSet,
        userHasChosen: false,
        shuffledCardSet: scrambleArray(this.props.selectedCardSet), // assume it's already shuffled
        quizCardSet: (selectFlashCards(this.props.selectedCardSet, 0)),
        cardSetIndex: 0,
        randomNumber: Math.floor(Math.random() * 4)
    }

    answerClicked = () => {
        this.setState({
            userHasChosen: true
        })
    }
    
    getNewSetOfCards = (cards, cardSetIndex) => {
        console.log("Trying to get new set of cards")
        let newQuizArray = selectFlashCards(cards, cardSetIndex)
        this.setState({
            quizCardSet: newQuizArray
        })
    }
    showNextQuestion = () => {
        console.log("Trying to show next question")
        this.getNewSetOfCards(this.state.shuffledCardSet, this.state.cardSetIndex+1)
        this.setState({
            userHasChosen: false,
            cardSetIndex: this.state.cardSetIndex + 1
        })
    }
    render() {
        // this.getNewSetOfCards(this.state.shuffledCardSet, 0)
    return (
        <div>
            <div className="level level-set">
                <div className="box flashcard-box">
                        {/* <h1>{this.state.shuffledCardSet[this.state.shuffledCardSet.findIndex(x => x.answer===CORRECT_ANSWER)].term}</h1> */}
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
    );

}
}

Quiz.propTypes = {
    selectedFlashCards: array,
    changePageName: func,
};


export default Quiz;