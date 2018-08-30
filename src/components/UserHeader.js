import React, { Component } from 'react';
import { DASHBOARD, CREATE_VIEW, PROFILE_VIEW } from '../constants'

class UserHeader extends Component {
    render() {
        return (
            <nav className='level header-flex-content'>
                <div className=''>
                    <button onClick={() => {this.props.changePageName(DASHBOARD)}} className='button is-rounded is-info header-button'>Home</button>
                    <button className='button is-rounded is-primary header-button'>Card Sets</button> 
                </div>
                <div className=''>
                    <button onClick={() => {this.props.changePageName(DASHBOARD)}} className='button is-warning header-button home-logo'>Home Logo</button> 
                </div>
                <div className=''>
                    <button onClick={() => {this.props.changePageName(CREATE_VIEW)}} className='button header-button'>+</button>
                    <button onClick={() => {this.props.changePageName(PROFILE_VIEW)}} className='button is-dark header-button'>Profile</button>  
                </div>
            </nav>
        );
    }
}

UserHeader.propTypes = {

};

export default UserHeader;