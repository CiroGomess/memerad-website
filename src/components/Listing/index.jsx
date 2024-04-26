import React from 'react';
import './styles.css';

import xrd from '../../assets/xrd.png'
import caviar from '../../assets/caviar.png'
import oci from '../../assets/ociswap.png'
import defi from '../../assets/defiplaza.png'
import ast from '../../assets/astrolescent.png'





const Listing = () => {
    return (

        <section className='content-listing'>


            <div className='org-content'>

                <img src={xrd} alt="Star" />
                <img src={caviar} alt="Star" />
                <img src={oci} alt="Star" />
                <img src={defi} alt="Star" />
                <img src={ast} alt="Star"  className='img-ast'/>



            </div>

        </section>




    );
};

export default Listing;
