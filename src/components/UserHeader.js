import React, { Component } from 'react';
import { DASHBOARD, CREATE_VIEW } from '../constants'

class UserHeader extends Component {
    render() {
        return (
            <nav className='level'>
                <div className=''>
                    <button onClick={() => {this.props.changePageName(DASHBOARD)}} className='button is-rounded is-info'>Home</button>
                    <button className='button is-rounded is-primary'>Card Sets</button> 
                </div>
                <div className=''>
                    <button onClick={() => {this.props.changePageName(DASHBOARD)}} className='button is-warning'>Home Logo</button> 
                </div>
                <div className=''>
                    <button onClick={() => {this.props.changePageName(CREATE_VIEW)}} className='button'>+</button>
                    <button className='button is-dark'>Profile</button>  
                </div>
            </nav>
        );
    }
}

UserHeader.propTypes = {

};

export default UserHeader;