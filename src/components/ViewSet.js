import React from 'react';
import { DASHBOARD, CREATE_VIEW, QUIZ } from '../constants'
import { func } from 'prop-types';

const Viewset = props => {
    return (
        <div>
            <div className="row level level-set">
                <div className="box setname-box">
                    <h1>SET NAME</h1>
                </div>
                <button className="btn btn-danger" onClick={() => {props.changePageName(CREATE_VIEW)}}>Edit</button>
                <button className="btn btn-success" onClick={() => {props.changePageName(QUIZ)}}>Quiz!</button>
                <div className="box description-box">
                    <h1>This will be the description box</h1>
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
            </div>
        </div>
    );

}

Viewset.propTypes = {
    changePageName: func,
};


export default Viewset