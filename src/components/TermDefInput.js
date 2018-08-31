import React, { Component } from 'react';


class TermDefInput extends Component {
    onChangeOne = e => {
        this.props.change("term", this.props.index, e.target.value);
    }

    oneChangeTwo = e => {
        this.props.change("definition", this.props.index, e.target.value);
    }

    render() {
        return (
            <div>
                <div className="field level">
                <button onClick={() => {this.props.deleteClicked(this.props.index)}} className='button button-border'>X</button>
                    <div className="level-item">
                        <input className="input is-primary" type="text" placeholder="Term"
                            value={this.props.card.term} onChange={this.onChangeOne} />
                    </div>
                    <div className="level-item">
                        <input className="input is-primary" type="text" placeholder="Definition"
                            value={this.props.card.definition} onChange={this.oneChangeTwo} />
                    </div>
                </div>
            </div>
        );
    }
}

TermDefInput.propTypes = {

};

export default TermDefInput;