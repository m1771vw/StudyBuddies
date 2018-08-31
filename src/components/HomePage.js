import React, { Component } from 'react';


class HomePage extends Component {
    render() {
        return (
            <section class="hero is-large home-page-gradient">
            <div class="hero-body">
            <div class="container title-text">
                <h1 class="title">
                        Study Buddies
                </h1>
                <h2 class="subtitle">
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