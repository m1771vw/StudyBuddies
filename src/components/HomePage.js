import React, { Component } from 'react';


class HomePage extends Component {
    render() {
        return (
            <section className="hero is-large home-page-gradient">
            <div className="hero-body">
            <div className="container title-text">
                <h1 className="title">
                        Study Buddies
                </h1>
                <h2 className="subtitle">
                        Friends to study with
                </h2>
            </div>
            </div>
            </section>
        );
    }
}

HomePage.propTypes = {

};

export default HomePage;