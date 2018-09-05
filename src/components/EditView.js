import React, { Component } from 'react';
import TermDefInput from './TermDefInput';
import { func, object, number } from 'prop-types';

class EditView extends Component {
    state = {
        setname: this.props.selectedCardSet.setname,
        description: this.props.selectedCardSet.description,
        cards: this.props.selectedCardSet.cards,
        cardColor: this.props.selectedCardSet.cardColor
    }

    changeTermDefInput = (property, index, newValue) => {
        let copy = { ...this.state.cards[index] };
        copy[property] = newValue;

        let newCards = [
            ...this.state.cards.slice(0, index),
            copy,
            ...this.state.cards.slice(index + 1)
        ];

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

    updateSet = () =>{
        this.props.updateCardSet(this.state);
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

    deleteClicked = (event, index) => {
        event.preventDefault()
        let newCards = [...this.state.cards.slice(0, index),
        ...this.state.cards.slice(index + 1)]
        this.setState({
            cards: newCards
        })
    }

    render() {
        return (
            <div className="edit-view-form">
            <form onSubmit={(event) => {
                            event.preventDefault()
                            this.props.updateCardSet(this.state)
                            this.setState({
                                setname: '',
                                description: '',
                                cards: [
                                    { term: '', definition: '' },
                                    { term: '', definition: '' },
                                    { term: '', definition: '' },
                                    { term: '', definition: '' }
                                ]
                            })}} >
                <div className="level">
                    <div className='level-item level-left'>
                            <button onClick={() => {this.props.selectCardSet(this.props.selectedCardSetIndex)}} 
                                    className='button is-watermelon'>Return to View</button>
                        </div>
                    <div className="level-item edit-set-name-field">
                        <input className="input button-border set-name-field"
                               value={this.state.setname} 
                               required 
                               onChange={this.onChange}
                               type="text" 
                               placeholder="Enter set name here..." />
                    </div>
                    <div className="level-item level-right"></div>
                </div>
                <div className="level text-area-level">
                    <textarea className="button-border textarea"
                              value={this.state.description} 
                              onChange={this.onChange2}
                              rows="7">          
                    </textarea>
                </div>
                <div className='field input-forms-container'>
                    {this.state.cards.map((card, index) => (
                        <div key={card + index} className='control term-def-container'>
                            <TermDefInput
                                key={index}
                                card={card}
                                changeTermDefInput={this.changeTermDefInput}
                                index={index}
                                deleteClicked={this.deleteClicked}
                            />
                            </div>
                        ))}
                </div>
                <div className="level" id="create-button-container">
                    <div className='add-button-container'>
                        <button className="button button-border is-large level-item" onClick={(e) => {this.addCard(e)}}>+</button>
                    </div>
                    <div className='submit-button-container'>
                        <button className="button button-border is-large level-item" > Update Set</button>
                    </div>
                </div>
                </form>
            </div>
        );
    }
}

EditView.propTypes = {
    selectCardSet: func,
    selectedCardSet: object,
    selectedCardSetIndex: number,
    updateCardSet: func
};

export default EditView;
