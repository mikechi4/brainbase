import React from 'react';

import './footer.scss';

import Logo from '../Logo/Logo';
import {FooterSocialItems} from './FooterSocialItems';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__content-container">
                <div className="footer__social-container">
                    <Logo fill="white" />
                    <p className="footer__text footer__text-origin">Made in Los Angeles, CA</p>
                    <ul>
                        {FooterSocialItems.map((item, index) => {
                            return (
                                <li className="footer__social-item" key={index}>
                                    <a href={item.href} aria-label={item.ariaLabel}>
                                        <img src={item.imgSrc} />
                                    </a>
                                </li>
                            )
                        })}
                    </ul>                    
                </div>
                <hr className="footer__divider"/>
                <p className="footer__text footer__text-rights">Brainbase, All rights reserved 2020</p>
            </div>
        </footer>
    );
};

export default Footer;