import React, { Component } from 'react';
import { array, func } from 'prop-types';
import { CREATE_VIEW } from '../constants'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="type-writer-font" id='dashboard-text'>Welcome To Your Dashboard, {this.props.currentUser.displayName}!</div>
                <div className='level'>
                    <div className='flashcard-flex-container'>
                        <div>
                            <button onClick={() => {this.props.changePageName(CREATE_VIEW)}} 
                            className='button dashboard-button flashcard-box dashboard-create-flashcard'>+</button>
                        </div>
                        {this.props.flashCardSets.map((cardsets, index) => {
                            return(
                                <div key={cardsets+index} className='viewset-flashcard roboto-font '>
                                    <button onClick={() => {this.props.selectCardSet(index)}} 
                                    style={{backgroundColor: cardsets.cardColor}} 
                                    className='button is-success dashboard-button flashcard-box dashboard-button-text viewset-flashcard dashboard-display-flashcard'>
                                    {cardsets.setname}
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>  
            </div>
        );
    }
}

Dashboard.propTypes = {
    flashCardSets: array,
    changePageName: func
};

export default Dashboard;