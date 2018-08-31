import React, { Component } from 'react';
import { LOGIN_VIEW } from '../constants';


class HomePageHeader extends Component {
    render() {
        return (
            <div className='hero-head'>
                <nav className="navbar is-transparent">
                <div className="navbar-brand header-button">
                    <a className="button is-primary">
                        <span className="icon">
                            <i class="fas fa-id-card"/>
                        </span>
                        <span>Study Buddies</span>
                    </a>
                </div>

                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                        <p className="control">
                            <a className="button">
                            <span className="icon">
                            <i className="fas fa-user-plus"/>
                            </span>
                            <span>
                                Sign Up
                            </span>
                            </a>
                        </p>
                        <p className="control">
                            <a className="button is-primary">
                            <span className="icon">
                            <i className="fas fa-sign-in-alt"/>
                            </span>
                            <span>Log In</span>
                            </a>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </nav>
            </div>
            /* /* <div>
                <button>Sign up</button>
                <button onClick={()=>{this.props.changePageName(LOGIN_VIEW)}}>Log in</button>
            </div> */ 
        );
    }
}

HomePageHeader.propTypes = {

};

export default HomePageHeader;