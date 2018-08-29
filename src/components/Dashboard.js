import React, { Component } from 'react';
import { func } from 'prop-types';
import {QUIZ, CREATE_VIEW, VIEW_SET } from '../constants'


class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                {/* <button onClick={this.props.viewCreateView} className='button is-primary'>Create Set</button>
                <button onClick={this.props.viewViewSet} className='button is-success'>View Set</button> */}
                <button onClick={() => {this.props.changePageName(CREATE_VIEW)}} className='btn btn-primary'>Create Set</button>
                <button onClick={() => {this.props.changePageName(VIEW_SET)}} className='btn btn-success'>View Set</button>
                <button onClick={() => {this.props.changePageName(QUIZ)}} className='btn btn-success'>Quiz</button>
            </div>
        );
    }
}

Dashboard.propTypes = {
    changePageName: func,
};

export default Dashboard;