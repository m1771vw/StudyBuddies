import React, { Component } from 'react';
import { SIGNUP_VIEW } from '../constants';


class HomePage extends Component {
    render() {
        return (
            <div>
            <section className="hero is-large home-page-gradient">
            <div className="hero-body">
            <div className="container title-text">
                <h1 className="title">
                        We are the creators of Study Buddies
                </h1>
                <h2 className="subtitle">
                        William Yang and James Park. Redwood Academy Coders. 
                </h2>
                
            </div>
            </div>
            </section>
        </div>
        );
    }
}

HomePage.propTypes = {

};

export default HomePage;