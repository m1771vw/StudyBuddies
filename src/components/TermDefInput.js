import React, { Component } from 'react';
import { func, object, number } from 'prop-types';

class TermDefInput extends Component {
    onTermChange = e => {
        this.props.changeTermDefInput("term", this.props.index, e.target.value);
    }

    onDefinitionChange = e => {
        this.props.changeTermDefInput("definition", this.props.index, e.target.value);
    }

    render() {
        return (
            <div>
                <div className="level">
                <button onClick={(event) => {this.props.deleteClicked(event, this.props.index)}} className='button button-border'>X</button>
                    <div className="level-item no-margin-bottom">
                        <input className="input button-border term-input" type="text" placeholder="Term"
                            value={this.props.card.term} onChange={this.onTermChange} />
                    </div>
                    <div className="level-item no-margin-bottom">
                        <input className="input button-border term-input" type="text" placeholder="Definition"
                            value={this.props.card.definition} onChange={this.onDefinitionChange} />
                    </div>
                </div>
            </div>
        );
    }
}

TermDefInput.propTypes = {
    card: object,
    index: number,
    change: func,
    deleteClicked: func,

};

export default TermDefInput;