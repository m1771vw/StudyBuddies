import React, { Component } from 'react';


class CreateView extends Component {

createRow = () =>{
    
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

                <div className="field level">
                    <div className="term-div">
                        <input className="input is-primary" type="text" placeholder="Term" />
                        <input className="input is-primary" type="text" placeholder="Term" />
                        <input className="input is-primary" type="text" placeholder="Term" />
                        <input className="input is-primary" type="text" placeholder="Term" />
                    </div>
                    <div className="definition-div">
                        <input className="input is-primary" type="text" placeholder="Definition" />
                        <input className="input is-primary" type="text" placeholder="Definition" />
                        <input className="input is-primary" type="text" placeholder="Definition" />
                        <input className="input is-primary" type="text" placeholder="Definition" />
                    </div>
                </div>
                <div className="level" id="createbutton1">
                <button className="button is-large level-item">+</button>
                <button className="button is-large level-item">Submit Set</button>
                </div>


            </div>
        );
    }
}

CreateView.propTypes = {

};

export default CreateView;