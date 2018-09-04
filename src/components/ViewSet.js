import React, { Component } from 'react';
import { QUIZ, EDIT } from '../constants';
import { func, object } from 'prop-types';


class Viewset extends Component {
    state = {
        // showTerms: true,
        selectedCardSet: this.props.selectedCardSet.cards.map(x => ({ ...x, showTerms: true }))
    }

    showOtherSide = (index) => {
        let cardSetCopy = [...this.state.selectedCardSet];
        cardSetCopy[index]['showTerms'] = !cardSetCopy[index]['showTerms'];

        this.setState({
            showTerms: !this.state.showTerms,
            cards: cardSetCopy
        })
    }
    render() {
        return (
            <div>
                <div className="level">
                    <div className="cardset-info-flex-container level-item level-left">
                        <div className='cardset-setname-flex-container'>
                            <div className="setname-box ">
                                <h1 className="setname-text type-writer-font">{this.props.selectedCardSet.setname}</h1>
                                <h2 className="roboto-font">{this.props.selectedCardSet.description}</h2>
                            </div>
                            <div className='cardset-options-flex-container'>
                                <button className="button is-danger" onClick={() => { this.props.changePageName(EDIT) }}>Edit</button>
                                <button className="button is-success" onClick={() => { this.props.setupQuiz(QUIZ, this.props.selectedCardSet) }}>Quiz!</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='level'>
                    <div className='flashcard-flex-container'>
                        {this.state.selectedCardSet.map((card, index) => {
                            return (
                                <div onMouseEnter={() => { this.showOtherSide(index) }} onMouseLeave={() => { this.showOtherSide(index) }} key={card + index} className='level-item level-left'>
                                    <div className="box flashcard-box viewset-flashcard roboto-font">
                                        {
                                            card['showTerms']
                                                ? (<div className='has-text-centered term-text'>
                                                    <h1>{card.term}</h1>
                                                    </div>)
                                                : (<div className='has-text-centered'>
                                                    <h1>Definition: </h1>
                                                    <h1>{card.definition}</h1>
                                                    </div>)
                                        }
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

Viewset.propTypes = {
    changePageName: func,
    selectedCardSet: object,
    setupQuiz: func
};


export default Viewset