import React, { Component } from 'react';
import { func } from 'prop-types';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <button onClick={this.props.viewCreateView} className='button is-primary'>Create Set</button>
                <button onClick={this.props.viewViewSet} className='button is-success'>View Set</button>
            </div>
        );
    }
}

Dashboard.propTypes = {
    changePage: func,
    viewCreateView: func,
    viewViewSet: func
};

export default Dashboard;