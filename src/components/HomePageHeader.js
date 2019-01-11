import React, { Component } from 'react';
import { LOGIN_VIEW, SIGNUP_VIEW, HOMEPAGE } from '../constants';
import StudyBuddyLogo from '../img/studybuddieslogo.png'
import { func } from 'prop-types';

class HomePageHeader extends Component {
    state = {
        active:false
    }

    toggleActive = () => {
        let { active } = this.state;
        this.setState({
            active: !active
        });
    }

    render() {
        let { active } = this.state;
        let { toggleActive } = this;
        return (
            <div className='hero-head'>
                <nav className="navbar is-transparent">
                    <div className="navbar-brand header-button">
                        <div className='home-logo' >
                            <img onClick={() => { this.props.changePageName(HOMEPAGE) }}
                                src={StudyBuddyLogo}
                                alt="Logo"
                                width={170 + 'px'}
                                height={37 + 'px'} />
                        </div>
                    <div onClick={toggleActive} className={"navbar-burger burger " + (active ? "is-active" : "")}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    </div>
                    <div className={"navbar-menu transition " + (active ? "is-active" : "")}>
                        <div className="navbar-end transition">
                            <div className="navbar-item transition">
                                <div className="field is-grouped transition">
                                    <p className="control">
                                        <a onClick={() => { this.props.changePageName(SIGNUP_VIEW) }} className="button button-border">
                                            <span className="icon">
                                                <i className="fas fa-user-plus roboto-font" />
                                            </span>
                                            <span>Sign Up</span>
                                        </a>
                                    </p>
                                    <p className="control">
                                        <a onClick={() => { this.props.changePageName(LOGIN_VIEW) }} className="button is-watermelon">
                                            <span className="icon">
                                                <i className="fas fa-sign-in-alt roboto-font" />
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
        );
    }
}

HomePageHeader.propTypes = {
    changePageName: func
};

export default HomePageHeader;