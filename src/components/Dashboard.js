import React, { Component } from 'react';
import { func } from 'prop-types';

const DASHBOARD = 'DASHBOARD';
const CREATE_VIEW = 'CREATE';
const VIEW_SET = 'VIEW';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                {/* <button onClick={this.props.viewCreateView} className='button is-primary'>Create Set</button>
                <button onClick={this.props.viewViewSet} className='button is-success'>View Set</button> */}
                <button onClick={() => {this.props.changePageName(CREATE_VIEW)}} className='button is-primary'>Create Set</button>
                <button onClick={() => {this.props.changePageName(VIEW_SET)}} className='button is-success'>View Set</button>
            </div>
        );
    }
}

Dashboard.propTypes = {
    changePageName: func,
};

export default Dashboard;