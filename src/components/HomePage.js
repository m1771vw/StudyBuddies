import React, { Component } from 'react';
import { SIGNUP_VIEW } from '../constants';
import AboutUs from '../components/AboutUs';

class HomePage extends Component {
    render() {
        return (
            <div>
            <section className="hero is-large home-page-gradient">
                <div className="hero-body">
                <div className="container title-text">
                    <h1 className="title hero-title">
                            Study Buddies
                    </h1>
                    <h2 className="subtitle hero-subtitle">
                            Share and create flashcards! 
                    </h2>
                    <button onClick={() => {this.props.changePageName(SIGNUP_VIEW)}} className="button is-watermelon">Sign up for free </button>
                </div>
                </div>
            </section>
            <AboutUs />
            <footer className="hero-foot is-small secondGrad home-page-gradient">
            <div className="hero-body">
            <div className="container title-text2">
            <h1 className="title">
                        Study Buddies </h1>
            <h2>About</h2>
            <p>Creators</p>
            <p>Privacy</p>
            <p>Jobs</p>
            <p>Terms</p>
                
            </div>
            </div>
            </footer>
       
        </div>
        );
    }
}

HomePage.propTypes = {

};

export default HomePage;