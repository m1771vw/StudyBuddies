import React, {Component } from 'react';
import AboutUsPhoto  from '../img/RUSHHOUR.jpg';


class AboutUs extends Component {
    render() {
        return (
            <section className="hero is-small ">
            <div className="about-us-container">
            <figure className="image mobile-wide-width">
                <img className='about-us-photo' src={AboutUsPhoto} alt="The creators"/>
              <div className="transparent-background brought-to-you center-text">
                <div className="creator-font type-writer-font">Brought to you by:
                <div className="type-writer-font about-us-font" >
                    <h2>James Park & William Yang</h2>
                    <h2 id="aspire">Developers in Development</h2>
                    
                </div>
                </div>
               </div>
            </figure>
           
            </div>
        </section>
    );
}
}

export default AboutUs;