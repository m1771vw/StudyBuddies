import React, { Component } from 'react';
import TermDefInput from './TermDefInput';
import { DASHBOARD } from '../constants/';
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
    }

    change = (property, index, newValue) => {
        let copy = { ...this.state.cards[index] };
        copy[property] = newValue;

        let newCards = [...this.state.cards.slice(0, index),
            copy, ...this.state.cards.slice(index + 1)];

        this.setState({ cards: newCards })
    }

    addCard = e => {
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
            ...this.state.slice(0,index),
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

    deleteClicked = index => {
        let newCards = [...this.state.cards.slice(0, index), 
            ...this.state.cards.slice(index+1)]
        this.setState({
            cards: newCards
        })
    }
    render() {
        return (
            <div>
                <div className="level">
                    <div className="level-item has-text-centered">
                        <input className="input is-primary set-name-field"
                            value={this.state.setname} onChange={this.onChange}
                            type="text" placeholder="Enter set name here..." />

                    </div>
                </div>

                <div className="level text-area-level">
                    <textarea className="textarea"
                        value={this.state.description} onChange={this.onChange2} placeholder="Enter description here..."
                        rows="7"></textarea>
                </div>
                <div className='field'>
                    {this.state.cards.map((card, index) => (
                        <div className='control'>
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
                <div className="level" id="create-button-set">
                    <button className="button button-border is-large level-item" onClick={this.addCard}>+</button>
                    <button className="button button-border is-large level-item level-right" onClick={this.submitSet} >
                        Submit Set</button>
                </div>


            </div>
        );
    }
}

CreateView.propTypes = {

};

export default CreateView;