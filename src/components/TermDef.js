import React, { Component } from 'react';


class TermDef extends Component {

state={
    term:'',
    definiton:'',
}

onChangeOne= e =>{
    this.props.change("term", this.props.index, e.target.value);
    this.setState({term: e.target.value})
}

oneChangeTwo = e =>{
    this.props.change("definition", this.props.index, e.target.value);
    this.setState({definition: e.target.value})
}

    render() {
        return (
            <div>
                
                <div className="field level">
                    <div className="term-div level-item">
                        <input className="input is-primary" type="text" placeholder="Term"
                        value={this.state.term} onChange={this.onChangeOne} />
                    </div>
                    <div className="definition-div level-item">
                        <input className="input is-primary" type="text" placeholder="Definition"
                        value={this.state.definition} onChange={this.oneChangeTwo} />
                    </div>
                </div>
                 


            </div>
        );
    }
}

TermDef.propTypes = {

};

export default TermDef;