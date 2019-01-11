import React, { Component } from 'react';
import { SIGNUP_VIEW, LOGIN_VIEW } from '../constants';
import AboutUs from '../components/AboutUs';
import { func } from 'prop-types';
class HomePage extends Component {
    render() {
        return (
            <div>
                <section className="hero is-large home-page-gradient full-height">
                    <div className="hero-body">
                        <div className="container title-text">
                            <h1 className="title hero-title type-writer-font">
                                Study Buddies
                            </h1>
                            <h2 className="subtitle hero-subtitle roboto-font">
                                Create and study flashcards! 
                            </h2>
                        <div className='home-signup-container'>
                            <button onClick={() => {this.props.changePageName(SIGNUP_VIEW)}} 
                                    className="button is-watermelon">Sign up for free
                            </button>
                            <span className='home-login-text'>or 
                                <a onClick={() => {this.props.changePageName(LOGIN_VIEW)}}> log in</a>
                            </span>
                        </div>
                        </div>
                    </div>
                </section>
            <AboutUs />
            <footer className="hero-foot is-small secondGrad home-page-gradient">
                <div className="hero-body">
                    <div className="container footer-text">
                    {/* <h1 className="title type-writer-font">Study Buddies</h1> */}
                    <h2 className="type-writer-font">©2018 Study Buddies</h2>
                    {/* <p className="roboto-font">Creators</p>
                    <p className="roboto-font">Privacy</p>
                    <p className="roboto-font">Jobs</p>
                    <p className="roboto-font">Terms</p> */}
                </div>
                </div>
            </footer>
        </div>
        );
    }
}

HomePage.propTypes = {
    changePageName: func 
};

export default HomePage;