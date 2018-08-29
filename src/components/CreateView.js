import React, { Component } from 'react';
import TermDef from './TermDef'

class CreateView extends Component {

    state = {
        cards: [{term:'', definition:''},{term:'', definition:''},{term:'', definition:''},{term:'', definition:''}],
    }


change = (property,index,newValue) =>{
    let copy= {...this.state.cards[index]};
    copy[property]=newValue;

    let newCards = [...this.state.cards.slice(0,index),
        copy, ...this.state.cards.slice(index + 1)];
    
        this.setState({cards: newCards})
}

addCard = e => {
    let newCards = [...this.state.cards, {term:'', definition:''}];
    this.setState({cards:newCards})
}



    render() {
        return (
            <div>
                <div className="level">
                    <div className="level-item has-text-centered">
                        <input className="input is-primary set-name-field" type="text" placeholder="Enter set name here..." />
   
                    </div>
                </div>

                <div className="level text-area-level">
                        <textarea class="textarea" placeholder="Enter description here..." rows="7"></textarea>
                </div>
                <div>
                    {this.state.cards.map((card,index) =>(
                        <TermDef
                        key={index}
                        index={index}
                        change={this.change}
                        />
                    ))}


                </div>
                <div className="level" id="createbutton1">
                    <button className="button is-large level-item" onClick={this.addCard}>+</button>
                    <button className="button is-large level-item">Submit Set</button>
                </div>


            </div>
        );
    }
}

CreateView.propTypes = {

};

export default CreateView;