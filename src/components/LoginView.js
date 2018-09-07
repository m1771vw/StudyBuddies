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

    onLoginClick = (event) => {
        event.preventDefault()
        this.props.authenticateUser(this.state)
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div className="log-in-container">
            <form className="login-form" onSubmit={(event) => {this.onLoginClick(event)}}>
            <div className="login-field box">
            <h1 className="sign-title type-writer-font">Log in to Study Buddies </h1>
                <div className="field">
                    <label className="label is-medium roboto-font">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" 
                               type="email" 
                               placeholder="Email input"
                               value={this.state.email} 
                               required 
                               onChange={this.onChange} />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"/>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label is-medium roboto-font">Password</label>
                    <div className="control">
                        <input className="input" 
                               type="password"
                               value={this.state.password} 
                               required 
                               onChange={this.onChange2}
                               placeholder="Password" />
                    </div>
                </div>
                <label className="checkbox roboto-font"> <input type="checkbox"/> Remember me</label>
                <div>
                    <button className='button is-watermelon roboto-font'>Login</button>
                </div>
            </div>
            </form>
        </div>  
        );
    }
}

LoginView.propTypes = {
    changePageName: func,
    authenticateUser: func
};

export default LoginView;