import React, { Component } from 'react';
import { array, func } from 'prop-types';
import {QUIZ, CREATE_VIEW, VIEW_SET } from '../constants'


class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <div className='level'>
                    <div className='level-item'>

                        <button onClick={(event) => {this.props.changePageName(event, CREATE_VIEW)}} className='button is-primary dashboard-button'>Create Set</button>
                    </div>
                {this.props.flashCardSets.map((cardsets, index) => {
                    return(
                        <div className='level-item'>
                            <button onClick={() => {this.props.selectCardSet(index)}} className='button is-success dashboard-button'>{cardsets.setname}</button>
                        </div>
                )})}
                </div>
                {/* <button onClick={() => {this.props.changePageName(VIEW_SET)}} className='button is-success'>View Set</button> */}
                {/* <button onClick={() => {this.props.changePageName(QUIZ)}} className='button is-success'>Quiz</button> */}
            </div>
        );
    }
}

Dashboard.propTypes = {
    flashCardSets: array,
    changePageName: func
};

export default Dashboard;