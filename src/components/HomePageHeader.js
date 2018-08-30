import React, { Component } from 'react';
import { LOGIN_VIEW } from '../constants';


class HomePageHeader extends Component {
    render() {
        return (
            <div>
                <button>Sign up</button>
                <button onClick={()=>{this.props.changePageName(LOGIN_VIEW)}}>Log in</button>
            </div>
        );
    }
}

HomePageHeader.propTypes = {

};

export default HomePageHeader;