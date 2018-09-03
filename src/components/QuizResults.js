import React, { Component } from 'react';
import { VIEW_SET } from '../constants'
class QuizResults extends Component {
    render() {
        return (
            <div>
                <div className="level profile-level">
                <div className="box profile-box">
                <h1>Quiz Results:</h1>
                <h1>{this.props.selectedCardSet.setname}</h1>
                <h1 className="green-card">Total Correct: {this.props.scoreCorrect} ({Math.round(this.props.scoreCorrect/this.props.selectedCardSet.cards.length*100)}%)</h1>
                <h1 className="red-card">Total Missed: {this.props.scoreMissed}  ({Math.round(this.props.scoreMissed/this.props.selectedCardSet.cards.length*100)}%)</h1>
                </div></div>
                <div className='level-item'>

                <button className='button is-watermelon' onClick={() => {this.props.changePageName(VIEW_SET)}}>Return to Card Set</button>
                </div>
            </div>
        );
    }
}

QuizResults.propTypes = {

};

export default QuizResults;