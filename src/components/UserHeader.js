import React, { Component } from 'react';

class UserHeader extends Component {
    render() {
        return (
            <div id='header'>
                <button className='button is-info'>Home</button>
                <button className='button is-primary'>Card Sets</button> 
                <button className='button is-warning'>Home Logo</button> 
                <button className='button'>+</button>
                <button className='button is-dark'>Profile</button>  
            </div>
        );
    }
}

UserHeader.propTypes = {

};

export default UserHeader;