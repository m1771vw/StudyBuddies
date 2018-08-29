import React, { Component } from 'react';


class CreateView extends Component {


    
    render() {
        return (
            <div>
                <div className="level">
                    <div className="level-item has-text-centered">
                    <input className="input is-primary" type="text" placeholder="Term" />
                        
                    </div>
                </div>

                <div className="level">
                    <div className="level-item has-text-centered">
                    <textarea class="textarea" placeholder="Enter description here..."></textarea>
                    </div>
                </div>   

                <div className="field level">
                    <div className="term div"> 
                        <input className="input is-primary" type="text" placeholder="Term" />
                        <input className="input is-primary" type="text" placeholder="Term" />
                        <input className="input is-primary" type="text" placeholder="Term" />
                        <input className="input is-primary" type="text" placeholder="Term" />
                    </div>
                    <div className ="definition-div">
                        <input className="input is-primary" type="text" placeholder="Definition" />
                        <input className="input is-primary" type="text" placeholder="Definition" />
                        <input className="input is-primary" type="text" placeholder="Definition" />
                        <input className="input is-primary" type="text" placeholder="Definition" /> 
                    </div>
                </div>
               

            </div>
        );
    }
}

CreateView.propTypes = {

};

export default CreateView;