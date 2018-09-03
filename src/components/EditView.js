import React, { Component } from 'react';
import TermDefInput from './TermDefInput';


class EditView extends Component {
    state = {
        setname: this.props.selectedCardSet.setname,
        description: this.props.selectedCardSet.description,
        cards: this.props.selectedCardSet.cards,
        cardColor: this.props.selectedCardSet.cardColor
    }


    change = (property, index, newValue) => {
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

    deleteClicked = index => {
        let newCards = [...this.state.cards.slice(0, index),
        ...this.state.cards.slice(index + 1)]
        this.setState({
            cards: newCards
        })
    }



    render() {
        return (
            <div>
                <div className="level">
                    <div className='level-item level-left'>
                            <button onClick={() => {this.props.selectCardSet(this.props.selectedCardSetIndex)}} className='button is-primary'>Return to View</button>
                        </div>
                    <div className="level-item edit-set-name-field">
                        <input className="input is-primary set-name-field"
                        value={this.state.setname} onChange={this.onChange}
                            type="text" placeholder="Enter set name here..." />

                    </div>
                    <div className="level-item level-right"></div>
                </div>

                <div className="level text-area-level">
                    <textarea className="textarea"
                        value={this.state.description} onChange={this.onChange2}
                        rows="7"></textarea>
                </div>
                <div className='field input-forms-container'>
                    {this.state.cards.map((card, index) => (
                        <div className='control term-def-container'>
                            <TermDefInput
                                key={index}
                                card={card}
                                change={this.change}
                                index={index}
                                deleteClicked={this.deleteClicked}
                            />
                            </div>
                        ))}
                </div>
                <div className="level" id="create-button-container">
                    <div className='add-button-container'>
                        <button className="button is-large level-item" onClick={this.addCard}>+</button>
                    </div>
                    <div className='submit-button-container'>
                        <button className="button is-large level-item" onClick={() => {
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
                            })}} > Update Set</button>
                    </div>
                </div>
            </div>
        );
    }
}

EditView.propTypes = {

};

export default EditView;
