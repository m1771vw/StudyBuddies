import React, { Component } from 'react';

class ProfileView extends Component {
    onLogOutClicked = () => {
        this.props.logOut()
    }
    render() {
        return (
            <div>
                <div id='dashboard-text'>Welcome To Your Profile, {this.props.currentUser.fullName}!</div>
                <button onClick={this.onLogOutClicked}>Log Out</button>
            </div>
        );
    }
}

ProfileView.propTypes = {

};

export default ProfileView;