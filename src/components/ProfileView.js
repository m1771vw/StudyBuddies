import React, { Component } from 'react';
import { func, array }  from 'prop-types';
class ProfileView extends Component {
    onLogOutClicked = () => {
        this.props.logOut()
    }
    
    render() {
        return (
            <div>
                <div className="level profile-level">
                    <div className="box profile-box">
                        <div className="type-writer-font"id='dashboard-text'>Welcome To Your Profile {this.props.currentUser.displayName}!</div>
                        <h1 className="roboto-font">Email: {this.props.currentUser.email}</h1>
                        <h1 className="roboto-font">Name: {this.props.currentUser.fullName}</h1>
                        <h1 className="roboto-font">Display Name: {this.props.currentUser.displayName}</h1> 
                    </div>
                </div>
                <div className="level-item">
                    <button className="button is-danger" 
                            onClick={this.onLogOutClicked}>
                            Log Out
                    </button>
                </div>
            </div>
        );
    }
}

ProfileView.propTypes = {
    changePageName:func,
    currentUser:array,
    logOut:func
};

export default ProfileView;