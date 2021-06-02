import React from 'react';

import Logo from '../Logo/Logo';
import './Navbar.scss';

import { MenuItems } from './MenuItems';
const Navbar = () => {
    return(
        <header className="navbar">
            <div className="navbar__logo-wrap">
                <Logo />
            </div>
            <div className="navbar__menu-items">
                <ul>
                    {MenuItems.map((item,index) => {
                        return(
                            <li className={item.className} key={index}>
                                <a href={item.url} aria-label={item.label}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </header>
    )
};

export default Navbar;