import React from 'react'
import './styles.css'

import nenu from '../../assets/nenu-or.png'

const Swap = () => {
    return (

        <div className='content-swap-astro'>

            <div className='content-text'>
                <div>
                <h1 className='neonText'>Buy $MRD on Astrolescent!!</h1>
                </div>
               
                <p>

                    In collaboration with Astrolescent, we have developed an incredible feature to enhance your experience, 
                    facilitating direct buying and selling transactions through our Memerad website. This partnership aims to 
                    streamline your interactions with ease and efficiency.
                </p>


                <img src={nenu} alt="" />
            </div>



            <iframe
                className='content_swap'
                title="Swap"
                src="https://astrolescent.com/widget?to=resource_rdx1t5u04cs3u2yxqkcwku7jdvdvv9cu739jsx0rdwu97682lr0rn92qdh&amount=100"
                width="467px" height="750px" frameborder="0">
            </iframe>
        </div>

    )
}

export default Swap