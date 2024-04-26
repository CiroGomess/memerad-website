import React from 'react';
import './NavBar.css';

import Logo from '../../assets/logo.png'
import starSmall from '../../assets/starSmall.png'

const NavBar = () => {
    return (


        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo" />
                <span>$MRD</span>
            </div>


            <div  className='content-nav-options'>


                <div className="nav-items">
                    <a href="/roadmap" style={{ color: 'white' }}>ROADMAP</a>
                    <a href="/how-to-mrd" style={{ color: 'white' }}>HOW TO MRD</a>
                    <a href="/docs" style={{ color: 'white' }}>DOCS</a>
                    <a href="/community" style={{ color: 'white' }}>COMMUNITY</a>
                </div>
                <div className="buy-button">

                    <img src={starSmall} alt="Logo" />
                    <button onClick={() => window.location.href = 'https://ociswap.com/resource_rdx1t5u04cs3u2yxqkcwku7jdvdvv9cu739jsx0rdwu97682lr0rn92qdh'}>BUY MRD</button>
                </div>
            </div>


        </div>


    );
};

export default NavBar;
