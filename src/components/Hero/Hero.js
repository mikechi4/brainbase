import React from 'react';

import './Hero.scss'

const Hero = () => {
    return(
        <section className="hero">
            {/* <canvas></canvas> */}
            <div className="hero__circle-left"></div>
            <div className="hero__circle-right"></div>
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