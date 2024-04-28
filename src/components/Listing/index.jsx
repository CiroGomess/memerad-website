import React from 'react';
import './styles.css';

import xrd from '../../assets/xrd.png'
import caviar from '../../assets/caviar.png'
import oci from '../../assets/ociswap.png'
import defi from '../../assets/defiplaza.png'
import ast from '../../assets/astrolescent.png'
import dogeCube from '../../assets/dogecube.png'





const Listing = () => {
    return (

        <section className='content-listing'>


            <div className='org-content'>

                <a href="https://ociswap.com/resource_rdx1t5u04cs3u2yxqkcwku7jdvdvv9cu739jsx0rdwu97682lr0rn92qdh" target="_blank" rel="noopener noreferrer" >
                    <img src={xrd} alt="Star" />
                </a>
                <a href="https://www.caviarnine.com/earn/shape-liquidity/pool/component_rdx1cr967tufdmtnayllyujths75zhxne8pdq7jgucp0j50lhpydr58wtc" target="_blank" rel="noopener noreferrer" >
                    <img src={caviar} alt="Star" />
                </a>

                <a href="https://ociswap.com/resource_rdx1t5u04cs3u2yxqkcwku7jdvdvv9cu739jsx0rdwu97682lr0rn92qdh" target="_blank" rel="noopener noreferrer" >
                    <img src={oci} alt="Star" />
                </a>


                <a href="https://radix.defiplaza.net/liquidity/add" target="_blank" rel="noopener noreferrer" >
                    <img src={defi} alt="Star" />
                </a>

                <a href="https://astrolescent.com/?index" target="_blank" rel="noopener noreferrer" >
                    <img src={ast} alt="Star" className='img-ast' />
                </a>

                <a href="https://swap.dogecube.io/swap" target="_blank" rel="noopener noreferrer" >
                    <img src={dogeCube} alt="Star" className='img-doge' />
                </a>




            </div>

        </section>




    );
};

export default Listing;
