import React, { Component } from 'react';
import AboutUsPhoto  from '../img/RUSHHOUR.jpg';


class AboutUs extends Component {
    render() {
        return (

            
            <section className="hero is-small home-page-gradient2">
            <div className="about-us-container">
            <figure className="image">
                <img className='about-us-photo' src={AboutUsPhoto} alt="The creators photo"/>
              <div className="">
                <div className="top-right creator-font">Meet the creators of Study Buddies</div>
               </div>
            </figure>
           
            </div>
            </section>

        );
    }
}

AboutUs.propTypes = {

};

export default AboutUs;