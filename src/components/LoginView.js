import React, { Component } from 'react';
import {func} from 'prop-types';

class LoginView extends Component {
    state = {
        email: 'wyang@gmail.com',
        password: '123'
    }
    onLoginClick = () => {
        this.props.authenticateUser(this.state)
        this.setState({
            email: '',
            password: ''
        })
        // this.props.changePageName(DASHBOARD)
    }
    render() {
        return (
            <div>
                <h1>Login View</h1>
                
                <button onClick={this.onLoginClick}>Login</button>
            </div>
        );
    }
}

LoginView.propTypes = {
    changePageName: func,
    authenticateUser: func
};

export default LoginView;