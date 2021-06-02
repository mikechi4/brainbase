import React from 'react';

import './Hero.scss'
import circuit_left from '../../assets/hero/Circut-Left.png';
import circuit_right from '../../assets/hero/Circut-Right.png';

const Hero = () => {
    return(
        <section className="hero">
            {/* <canvas></canvas> */}
            <div className="hero__circle-left">
                <img src={circuit_left} className="hero__circuit-left-img" aria-hidden="true"/>
            </div>
            
            <div className="hero__circle-right">
                <img src={circuit_right} className="hero__circuit-right-img" aria-hidden="true"/>
            </div>
            <div className="hero__content-container">
                <h1 className="hero__title">
                    Protecting your ideas should be simple
                </h1>
                <p className="hero__copy">
                    Brainbase is a modern, accessible platform for all your intellectual property needs. From filing your very first trademark to protecting and monetizing your IP, we make it simple every step of the way. 
                </p>
            </div>
        </section>
    )
};

export default Hero;