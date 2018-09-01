import React, { Component } from 'react';

class ProfileView extends Component {
    onLogOutClicked = () => {
        this.props.logOut()
    }
    render() {
        return (
            <div className="level">
                <div id='dashboard-text'>Welcome To Your Profile, {this.props.currentUser.fullName}!</div>
                
                <div><button className="button is-danger"onClick={this.onLogOutClicked}>Log Out</button></div>
            </div>
        );
    }
}

ProfileView.propTypes = {

};

export default ProfileView;