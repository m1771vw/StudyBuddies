import React, { Component } from 'react';

class ProfileView extends Component {
    onLogOutClicked = () => {
        this.props.logOut()
    }
    render() {
        return (
            <div>
                <h1>Your Profile</h1>
                <button onClick={this.onLogOutClicked}>Log Out</button>
            </div>
        );
    }
}

ProfileView.propTypes = {

};

export default ProfileView;