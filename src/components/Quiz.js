import React, { Component } from 'react';
import { DASHBOARD, CREATE_VIEW, QUIZ, VIEW_SET } from '../constants'
import { func } from 'prop-types';

class Quiz extends Component {

    render() {
    return (
        <div>
            <div className="level level-set">
            <div className="box flashcard-box">
                    <h1>Flashcard Question</h1>
                </div>
            </div>

            <div className="row level level-flashcards">
                <div className="box flashcard-box">
                    <h1>Flashcard 1</h1>
                </div>
                <div className="box flashcard-box">
                    <h1>Flashcard 2</h1>
                </div>
                <div className="box flashcard-box">
                    <h1>Flashcard 3</h1>
                </div>
                {/* <div className="box flashcard-box">
                    <h1>Flashcard 4</h1>
                </div> */}
            </div>
        </div>
    );

}
}

Quiz.propTypes = {
    changePageName: func,
};


export default Quiz;