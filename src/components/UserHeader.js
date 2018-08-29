import React, { Component } from 'react';
import { DASHBOARD, CREATE_VIEW } from '../constants'

class UserHeader extends Component {
    render() {
        return (
            <nav className='row'>
                <div className=''>
                    <button onClick={() => {this.props.changePageName(DASHBOARD)}} className='btn btn-info'>Home</button>
                    <button className='btn btn-primary'>Card Sets</button> 
                </div>
                <div className=''>
                    <button onClick={() => {this.props.changePageName(DASHBOARD)}} className='btn btn-warning'>Home Logo</button> 
                </div>
                <div className=''>
                    <button onClick={() => {this.props.changePageName(CREATE_VIEW)}} className='btn btn-'>+</button>
                    <button className='btn btn-dark'>Profile</button>  
                </div>
            </nav>
        );
    }
}

UserHeader.propTypes = {

};

export default UserHeader;