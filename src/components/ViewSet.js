import React from 'react';
import { CREATE_VIEW, QUIZ } from '../constants'
import { func, object } from 'prop-types';


const Viewset = props => {
    return (
        <div>
            <div className="level">
                <div className="cardset-info-flex-container">
                    <div className='cardset-setname-flex-container'>
                        <div className="box setname-box">
                            <h1>SET NAME</h1>
                            <h2>{props.selectedCardSet.setname}</h2>
                        </div>
                        <div className='cardset-options-flex-container'>
                            <button className="button is-danger" onClick={() => {props.changePageName(CREATE_VIEW)}}>Edit</button>
                            <button className="button is-success" onClick={() => {props.setupQuiz(QUIZ, props.selectedCardSet)}}>Quiz!</button>
                        </div>
                    </div>
                    <div className="box description-box">
                        <h1>Description</h1>
                        <p>{props.selectedCardSet.description}</p>
                    </div>
                </div>
            </div>
            <div className='level'>
                <div className='flashcard-flex-container'>
                    {props.selectedCardSet.cards.map( (card, index) => {
                        return(
                        <div key={card+index} className='level-item level-left'>
                            <div className="box flashcard-box">
                                <h1>{card.term}</h1>
                            </div>
                        </div>
                        
                    )})}
                </div>
            </div>
        </div>
    );

}

Viewset.propTypes = {
    changePageName:func,
    selectedCardSet:object,
    setupQuiz:func
};


export default Viewset