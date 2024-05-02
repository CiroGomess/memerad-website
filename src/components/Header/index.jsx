import React, { useState } from 'react';
import './NavBar.css';

import Logo from '../../assets/logo.png';
import starSmall from '../../assets/starSmall.png';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavLinkClick = (selector, event) => {
        event.preventDefault();
        setIsOpen(false);


        const section = document.querySelector(selector);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo" />
                <span>$MRDs</span>
            </div>

            <div className="hamburger" onClick={() => setIsOpen(true)}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className={`menu ${isOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
                <div className="nav-items mobile-nav-items">
                    <a href="#roadmap" onClick={(e) => handleNavLinkClick('.content-info-tam.roadmap', e)}>ROADMAP</a>
                    <a href="/how-to-mrd" onClick={(e) => handleNavLinkClick('.tokens-distribution-content', e)}>DISTRIBUTION</a>
                    <a href="https://docs.memerad.info/" target='_blank' rel="noopener noreferrer"  >DOCS</a>
                    <a href="#community" onClick={(e) => handleNavLinkClick('.content-info-tam.content-x-telegram', e)}>COMMUNITY</a>
                </div>
            </div>

            <div className="content-nav-options desktop-nav-options">
                <div className="nav-items">
                    <a href="#roadmap" onClick={(e) => handleNavLinkClick('.content-info-tam.roadmap', e)}>ROADMAP</a>
                    <a href="/how-to-mrd" onClick={(e) => handleNavLinkClick('.tokens-distribution-content', e)}>DISTRIBUTION</a>
                    <a href="https://docs.memerad.info/" target='_blank' rel="noopener noreferrer"  >DOCS</a>
                    <a href="#community" onClick={(e) => handleNavLinkClick('.content-info-tam.content-x-telegram', e)}>COMMUNITY</a>
                </div>
                <div className="buy-button">
                    <img src={starSmall} alt="Logo" />
                    <button>
                        <a href="https://astrolescent.com/?to=resource_rdx1t5u04cs3u2yxqkcwku7jdvdvv9cu739jsx0rdwu97682lr0rn92qdh" target="_blank" rel="noopener noreferrer">
                            BUY MRD
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
