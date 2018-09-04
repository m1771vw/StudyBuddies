import React, { Component } from 'react';

class SignupView extends Component {
    state = {
        email: '',
        displayName: '',
        fullName: '',
        password: '',
        confirmPassword: '',
    }

    addUser = () => {
        this.props.addToUser(this.state);
        this.setState({
            email: '',
            displayName: '',
            fullName: '',
            password: '',
            confirmPassword: ''
        })
    }

    onChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    onChange2 = event => {
        this.setState({
            displayName: event.target.value
        })
    }

    onChange3 = event => {
        this.setState({
            fullName: event.target.value
        })
    }

    onChange4 = event => {
        this.setState({
            password: event.target.value
        })
    }

    onChange5 = event => {
        this.setState({
            confirmPassword: event.target.value
        })
    }

    render() {
        return (
            <div className="sign-up-container">
                <form className="Form"  onSubmit={this.addUser}>
                    <div className="signup-field box sign-up-box" >
                        <h1 className="sign-title type-writer-font">Create your account</h1>
                        <div className="field">
                            <label className="label is-medium roboto-font"> Name</label>
                            <div className="control">
                                <input className="input" type="text" required
                                    value={this.state.fullName} onChange={this.onChange3}
                                    placeholder="Name" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label is-medium roboto-font">Username</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="text" required placeholder="Username"
                                    value={this.state.displayName} onChange={this.onChange2} />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label is-medium roboto-font">Email</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="email" required placeholder="Email input"
                                    value={this.state.email} onChange={this.onChange} />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label is-medium roboto-font">Password</label>
                            <div className="control">
                                <input className="input" type="password" required
                                    value={this.state.password} onChange={this.onChange4}
                                    placeholder="Password" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label is-medium roboto-font">Confirm password</label>
                            <div className="control">
                                <input className="input" type="password" required
                                    value={this.state.confirmPassword} onChange={this.onChange5}
                                    placeholder="Confirm password" />
                            </div>
                        </div>
                        <button className='button is-primary'>Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}

SignupView.propTypes = {

};

export default SignupView;