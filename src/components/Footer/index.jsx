import React from 'react';
import './styles.css';


import run from '../../assets/run-footer.png'





const Footer = () => {
    return (

        <section className='org-content-footer'>


            <div className='org-content-footer-items'>

                <p>Home</p>
                <p>How to buy</p>
                <img src={run} alt="Star" />
                <p>Contact</p>
                <p>Roadmap</p>



            </div>

        </section>




    );
};

export default Footer;
