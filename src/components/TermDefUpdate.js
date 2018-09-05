import React, { Component } from 'react';
import { func, number } from 'prop-types';

class TermDefUpdate extends Component {
    onTermChange = e => {
        this.props.changeTermDefInput("term", this.props.index, e.target.value);
    }

    onDefinitionChange = e => {
        this.props.changeTermDefInput("definition", this.props.index, e.target.value);
    }

    render() {
        return (
            <div>
                <div className="field level">
                    <div className="term-div level-item">
                        <input className="input is-primary" type="text" placeholder="Term"
                            value={this.props.card.term} onChange={this.onTermChange} />
                    </div>
                    <div className="definition-div level-item">
                        <input className="input is-primary" type="text" placeholder="Definition"
                            value={this.props.card.definition} onChange={this.onDefinitionChange} />
                    </div>
                </div>
            </div>
        );
    }
}

TermDefUpdate.propTypes = {
    card:array,
    changeTermDefInput:func,
    index:number,
    deleteClicked:func
};

export default TermDefUpdate;