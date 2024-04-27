import React from 'react';
import './styles.css';


import run from '../../assets/run-footer.png'





const Footer = () => {



    const handleNavLinkClick = (selector, event) => {
        event.preventDefault();



        const section = document.querySelector(selector);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (

        <section className='org-content-footer'>


            <div className='org-content-footer-items'>

                <p  onClick={(e) => handleNavLinkClick('.text-img', e)}>Home</p>
                <p  onClick={(e) => handleNavLinkClick('.tokens-distribution-content', e)}>Distribution</p>
                <img src={run} alt="Star" className='logo-rdx' />
                <a href="https://docs.memerad.info/" >
                    <p>Contact</p>
                </a>

                <p onClick={(e) => handleNavLinkClick('.content-info-tam.roadmap', e)}>Roadmap</p>



            </div>

        </section>




    );
};

export default Footer;
