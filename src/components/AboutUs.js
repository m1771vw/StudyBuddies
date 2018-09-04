import React, { Component } from 'react';
import AboutUsPhoto  from '../img/RUSHHOUR.jpg';


class AboutUs extends Component {
    render() {
        return (

            
            <section className="hero is-small home-page-gradient2">
            <div className="about-us-container">
            <figure className="image">
                <img className='about-us-photo' src={AboutUsPhoto} alt="The creators photo"/>
              <div className>
                <div className="top-right creator-font type-writer-font">Brought to you by:
                <div className="top-right type-writer-font about-us-font" >
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

AboutUs.propTypes = {

};

export default AboutUs;