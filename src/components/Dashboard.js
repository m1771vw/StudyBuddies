import React, { Component } from 'react';
import { array, func } from 'prop-types';
import { CREATE_VIEW } from '../constants'

const RANDOM_COLORS = ['#55DDE0', '#33658A', '#2F4858', '#FAFAC6', '#8DAA91', '#28112B']
class Dashboard extends Component {
    randomNumber = () => {
        return Math.floor(Math.random() * RANDOM_COLORS.length)
    }
    render() {
        return (
            <div>
                <div id='dashboard-text'>Welcome To Your Dashboard, {this.props.currentUser.displayName}!</div>
                <div className='level'>
                    <div className='flashcard-flex-container'>
                        <div className=''>
                            <button onClick={() => {this.props.changePageName(CREATE_VIEW)}} className='button is-primary dashboard-button flashcard-box'>Create Set</button>
                        </div>
                        {this.props.flashCardSets.map((cardsets, index) => {
                            return(
                                <div key={cardsets+index} className=''>
                                    <button onClick={() => {this.props.selectCardSet(index)}} style={{backgroundColor: RANDOM_COLORS[this.randomNumber()]}} className='button is-success dashboard-button flashcard-box'>{cardsets.setname}</button>
                                </div>
                        )})}
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