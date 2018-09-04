import React, { Component } from 'react';
import TermDefInput from './TermDefInput';
import {RANDOM_COLORS} from '../constants';
class CreateView extends Component {
    state = {
        setname: '',
        description: '',
        cards: [
            { term: '', definition: '' },
            { term: '', definition: '' },
            { term: '', definition: '' },
            { term: '', definition: '' }
        ],
        cardColor: RANDOM_COLORS[Math.floor(Math.random()*RANDOM_COLORS.length)]
    }

    change = (property, index, newValue) => {
        let copy = { ...this.state.cards[index] };
        copy[property] = newValue;

        let newCards = [...this.state.cards.slice(0, index),
            copy, ...this.state.cards.slice(index + 1)];

        this.setState({ cards: newCards })
    }

    addCard = e => {
        e.preventDefault()
        let newCards = [...this.state.cards, { term: '', definition: '' }];
        this.setState({ cards: newCards })
    }

    onChange = event => {
        this.setState({
            setname: event.target.value
        })
    }

    onChange2 = event => {
        this.setState({
            description: event.target.value
        })
    }

    submitSet = () => {
        this.props.addToCards(this.state);
    }

    deleteSet = index => {
        let newSet = [
            ...this.state.slice(0, index),
            ...this.state.slice(index + 1)
        ];
        this.setState({
            setname: '',
            description: '',
            cards: [
                { term: '', definition: '' },
                { term: '', definition: '' },
                { term: '', definition: '' },
                { term: '', definition: '' }
            ]
        })
    }

    deleteClicked = (event,index) => {
        event.preventDefault()
        let newCards = [...this.state.cards.slice(0, index),
        ...this.state.cards.slice(index + 1)]
        this.setState({
            cards: newCards
        })
    }
    
    render() {
        return (
            <div id='create-view-form'>
            <form onSubmit={this.submitSet}>
                <div className="level">
                    <div className="level-item has-text-centered">
                        <input className="input button-border set-name-field"
                            value={this.state.setname} onChange={this.onChange}
                            type="text" required placeholder="Enter set name here..." />
                    </div>
                </div>
                <div className="level text-area-level">
                    <textarea className="button-border textarea"
                        value={this.state.description} onChange={this.onChange2} placeholder="Enter description here..."
                        rows="7"></textarea>
                </div>  
                <div className='field input-forms-container'>
                    {this.state.cards.map((card, index) => (
                        <div className='control term-def-container'>
                            <TermDefInput
                                key={index}
                                card={card}
                                index={index}
                                change={this.change}
                                deleteClicked={this.deleteClicked}
                            />
                        </div>
                    ))}
                </div>
                <div className="level" id="create-button-container">
                    <div className='add-button-container'>
                    <button className="button button-border is-large" onClick={(e) => {this.addCard(e)}}>+</button>
                    </div>
                    <div className='submit-button-container'>
                    <button className="button button-border is-large" >
                        Submit Set</button>
                    </div>
                </div>
                </form>
            </div>
        );
    }
}

CreateView.propTypes = {

};

export default CreateView;