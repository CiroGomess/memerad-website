import React from 'react';
import './style.css';
import NavBar from '../../components/Header';
import logo from '../../assets/logoX.png'
import starSmall from '../../assets/starSmall.png'
import x from '../../assets/x.png'
import telegram from '../../assets/telegram.png'

import Roadmap from '../../components/Roadmap';
import Listing from '../../components/Listing';
import Footer from '../../components/Footer';



function App() {
  return (
    <div className="App">
      <NavBar />

      <section className='content-info-tam org-contents'>
        <div >
          <h1 className='neonText'><span>$MRD </span> the world</h1>
          <p>
            $MRD is more than just a token - it's the paradise of memecoins.
            Built on the Radix network (XRD),
            $MRD offers a unique and vibrant platform where memecoin culture thrives.
          </p>
        </div>

        <img src={logo} alt="memerad" />


      </section>


      <section className='content-info-tam'>

        <div className='tokens-distribution-content'>

          <div>
            <h1 className='neonText'>Token <br /> Distribution</h1>

            <div>
              <p>
                Price: 0.000045
              </p>

              <p>
                Market Cap: $16,857.56
              </p>



              <div className="buy-button-2">

                <img src={starSmall} alt="Logo" />
                <button onClick={() => window.location.href = 'https://ociswap.com/resource_rdx1t5u04cs3u2yxqkcwku7jdvdvv9cu739jsx0rdwu97682lr0rn92qdh'}>BUY MRD</button>
              </div>
            </div>
          </div>


          <div className='line' />



          <div className='distribution'>
            <p>Public Sale: 90,66% (453,3 million tokens).</p>
            <p>Burn: 5,34% (26.7 million tokens).</p>
            <p>Team: 2% (10 million tokens). </p>
            <p>Incentive Reserve: 1% (5 million tokens). </p>
            <p>Advisors: 1% (5 million tokens).  </p>
          </div>

        </div>

      </section>


      <section className='content-info-tam roadmap'>
        <div className='text'>
          <img src={starSmall} alt="Logo" />
          <h1>ROADMAP</h1>
          <img src={starSmall} alt="Logo" />
        </div>


        <Roadmap />




      </section>


      <section className='content-info-tam content-x-telegram'>

        <div className='content-text'>

          <p>
            Stay tuned for all the exciting updates from Memerad and make sure you don't miss a thing!
          </p>

        </div>

        <div className='content-xtl'>
          <img src={x} alt="Logo" />
          <img src={telegram} alt="Logo" />
        </div>

      </section>

      <Listing />
      <Footer />





    </div>
  );
}

export default App;