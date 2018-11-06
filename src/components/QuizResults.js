import React, { Component } from 'react';
import { VIEW_SET } from '../constants'
const QUIZ_RESULT_ANSWERS = ['Wow, you did great!', "You're almost there, study some more!", "Don't worry, study some more and try again!", "We all have those days, don't let it get you down!"]
class QuizResults extends Component {
    render() {
        let percentCorrect = Math.round(this.props.scoreCorrect/this.props.selectedCardSet.cards.length*100);
        let percentMissed = Math.round(this.props.scoreMissed/this.props.selectedCardSet.cards.length*100)
        return (
            <div>
                <div className="level profile-level">
                <div className="box profile-box">
                <h1 className="type-writer-font" id="quiz-results">Quiz Results:</h1>
                <h1>{this.props.selectedCardSet.setname}</h1>
                <h1 className="green-text roboto-font">Total Correct: {this.props.scoreCorrect} ({percentCorrect}%)</h1>
                <h1 className="red-text roboto-font">Total Missed: {this.props.scoreMissed}  ({percentMissed}%)</h1>
                <h1 className="roboto-font">{percentCorrect <= 25 ? QUIZ_RESULT_ANSWERS[3] : percentCorrect <= 50 ? QUIZ_RESULT_ANSWERS[2] : percentCorrect <= 75 ? QUIZ_RESULT_ANSWERS[1] : QUIZ_RESULT_ANSWERS[0]}</h1>
                </div></div>
                <div className='level-item'>

                <button className='button is-watermelon roboto-font' onClick={() => {this.props.changePageName(VIEW_SET)}}>Return to Card Set</button>
                </div>
            </div>
        );
    }
}

QuizResults.propTypes = {

};

export default QuizResults;