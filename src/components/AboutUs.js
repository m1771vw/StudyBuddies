import React, { Component } from 'react';
import AboutUsPhoto  from '../img/RUSHHOUR.jpg';


class AboutUs extends Component {
    render() {
        return (
            <div>
            
            <section className="hero is-small home-page-gradient">
            <figure className="image">
                <img className='about-us-photo' src={AboutUsPhoto} alt="The creators photo"/>
            </figure>
            
            <div className="hero-body">
            <div className="container title-text about-us-text">
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

AboutUs.propTypes = {

};

export default AboutUs;