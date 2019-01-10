import React, {Component} from 'react';
import TermDefInput from './TermDefInput';
import {RANDOM_COLORS} from '../constants';
import { func, array } from 'prop-types';

class CreateView extends Component {
    state = {
        setname: '',
        description: '',
        cards: [
            {
                term: '',
                definition: ''
            }, {
                term: '',
                definition: ''
            }, {
                term: '',
                definition: ''
            }, {
                term: '',
                definition: ''
            }
        ],
        cardColor: RANDOM_COLORS[Math.floor(Math.random() * RANDOM_COLORS.length)]
    }

    changeTermDefInput = (property, index, newValue) => {
        let copy = {
            ...this.state.cards[index]
        };
        copy[property] = newValue;

        let newCards = [
            ...this.state.cards.slice(0, index),
            copy,
            ...this.state.cards.slice(index + 1)
        ];

        this.setState({cards: newCards})
    }

    addCard = e => {
        if(e.detail=== 0 ) {
            return;
        }
        e.preventDefault()
        let newCards = [...this.state.cards, { term: '', definition: '' }];
        this.setState({ cards: newCards })
    }

    submitSet = (e) => {
        this.props.addToCards(this.state);
    }

    deleteClicked = (event, index) => {

        if(event.detail=== 0 ) {
            return;
        }
        event.preventDefault();
        let newCards = [
            ...this.state.cards.slice(0, index),
            ...this.state.cards.slice(index + 1)
        ]
        this.setState({cards: newCards})
    }

    onInputChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    deleteSet = index => {
        // let newSet = [
        //     ...this.state.slice(0, index),
        //     ...this.state.slice(index + 1)
        // ];
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div id='create-view-form'>
                <form onSubmit={this.submitSet}>
                    <div className="level">
                        <div className="level-item has-text-centered">
                            <input
                                className="input button-border set-name-field"
                                value={this.state.setname}
                                onChange={this.onInputChange}
                                type="text"
                                required
                                placeholder="Enter set name here..."
                                name="setname"
                            />
                        </div>
                    </div>

                    <div className="level text-area-level">
                        <textarea
                            className="button-border textarea"
                            value={this.state.description}
                            onChange={this.onInputChange}
                            placeholder="Enter description here..."
                            rows="7"
                            name="description"
                            >
                            </textarea>
                    </div>
                    <div className='field input-forms-container'>
                        {this.state.cards.map((card, index) => (
                                <div key={card+index} className='control term-def-container'>
                                    <TermDefInput
                                        key={index}
                                        card={card}
                                        index={index}
                                        changeTermDefInput={this.changeTermDefInput}
                                        deleteClicked={this.deleteClicked}/>
                                </div>
                            ))}
                    </div>
                    <div className="level" id="create-button-container">
                        <div className='add-button-container'>
                            <button className="button button-border is-large" onClick={this.addCard}>+</button>
                        </div>
                        <div className='submit-button-container'>
                            <button type='submit' className="button button-border is-large">
                                Submit Set</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

CreateView.propTypes = {
    addToCards: func,
    flashCardSets: array,
    changePageName: func
};

export default CreateView;