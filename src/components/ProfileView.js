import React, { Component } from 'react';

class ProfileView extends Component {
    onLogOutClicked = () => {
        this.props.logOut()
    }
    render() {
        return (
            <div>
                <div id='dashboard-text'>Welcome To Your Profile, {this.props.currentUser.fullName}!</div>
                <h1>Email: {this.props.currentUser.email}</h1>
                
                <button className='button is-warning' onClick={this.onLogOutClicked}>Log Out</button>
            </div>
        );
    }
}

ProfileView.propTypes = {

};

export default ProfileView;