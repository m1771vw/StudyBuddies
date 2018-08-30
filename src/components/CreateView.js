import React, { Component } from 'react';
import TermDefInput from './TermDefInput'

class CreateView extends Component {

    state = {
        setname:'',
        description:'',
        cards: [{ term: '', definition: '' }, { term: '', definition: '' }, { term: '', definition: '' }, { term: '', definition: '' }],
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

    



    render() {
        return (
            <div>
                <div className="level">
                    <div className="level-item has-text-centered">
                        <input className="input is-primary set-name-field"
                        setname={this.state.value} onChange={this.onChange}
                        type="text" placeholder="Enter set name here..." />

                    </div>
                </div>

                <div className="level text-area-level">
                    <textarea className="textarea" 
                    description={this.state.value} onChange={this.onChange2} placeholder="Enter description here..." 
                    rows="7"></textarea>
                </div>
                <div>
                    {this.state.cards.map((card, index) => (
                        <TermDefInput
                            key={index}
                            index={index}
                            change={this.change}
                            addToCards={this.props.addToCards}
                        />
                    ))}


                </div>
                <div className="level" id="createbutton1">
                    <button className="button is-large level-item" onClick={this.addCard}>+</button>
                    <button className="button is-large level-item" onClick={() => this.props.addToCards(this.state)} >
                    
                    Submit Set</button>
                </div>


            </div>
        );
    }
}

CreateView.propTypes = {

};

export default CreateView;