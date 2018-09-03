import React, { Component } from 'react';

class ProfileView extends Component {

    onLogOutClicked = () => {
        this.props.logOut()
    }
    render() {
        return (
            <div>
                <div className="level profile-level">
                <div className="box profile-box">
                    <div id='dashboard-text'>Welcome To Your Profile {this.props.currentUser.displayName}!</div>
                    <h1>Email: {this.props.currentUser.email}</h1>
                    <h1>Name: {this.props.currentUser.fullName}</h1>
                    <h1>Display Name: {this.props.currentUser.displayName}</h1>
                    
                </div>
                </div>
                <div className="level-item"><button className="button is-danger" onClick={this.onLogOutClicked}>Log Out</button></div>
            </div>
        );
    }
}

ProfileView.propTypes = {

};

export default ProfileView;