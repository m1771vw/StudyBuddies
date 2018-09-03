import React, { Component } from 'react';
import { func } from 'prop-types';

class LoginView extends Component {
    state = {
        email: '',
        password: ''
    }

    onChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    onChange2 = event => {
        this.setState({
            password: event.target.value
        })
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
            <div className="log-in-container">
            <div className="login-field box">
            <h1 className="sign-title">Log in to Study Buddies
                </h1>
                <div className="field">
                    <label className="label is-medium">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="email" placeholder="Email input"
                            value={this.state.email} onChange={this.onChange} />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>

                    </div>
                </div>

                <div className="field">
                    <label className="label is-medium">Password</label>
                    <div className="control">
                        <input className="input" type="password"
                            value={this.state.password} onChange={this.onChange2}
                            placeholder="Password" />
                    </div>
                </div>
                <label className="checkbox"> <input type="checkbox"></input> Remember me</label>
                
                <div>
                <button className='button is-primary' onClick={this.onLoginClick}>Login</button>
                </div>
                
            </div>
        </div>
                
            
        );
    }
}

LoginView.propTypes = {
    changePageName: func,
    authenticateUser: func
};

export default LoginView;