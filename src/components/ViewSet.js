import React from 'react';
import { DASHBOARD, CREATE_VIEW, QUIZ } from '../constants'
import { func } from 'prop-types';

const Viewset = props => {
    return (
        <div>
            <div className="level level-set">
                <div className="box setname-box">
                    <h1>SET NAME</h1>
                </div>
                <a className="button is-danger" onClick={() => {props.changePageName(CREATE_VIEW)}}>Edit</a>
                <a className="button is-success" onClick={() => {props.changePageName(QUIZ)}}>Quiz!</a>
                <div className="box description-box">
                    <h1>This will be the description box</h1>
                </div>
            </div>

            <div className="level level-flashcards">
                <div className='level-item level-left'>
                    <div className="box flashcard-box">
                        <h1>Flashcard 1</h1>
                    </div>
                </div>
                <div className='level-item'>
                    <div className="box flashcard-box">
                        <h1>Flashcard 2</h1>
                    </div>
                </div>
                <div className='level-item level-right'>
                    <div className="box flashcard-box">
                        <h1>Flashcard 3</h1>
                    </div>
                </div>
            </div>
        </div>
    );

}

Viewset.propTypes = {
    changePageName: func,
};


export default Viewset