
import React, { useEffect, useState } from 'react';

import './style.css';
import NavBar from '../../components/Header';
import logo from '../../assets/logoX.png'
import starSmall from '../../assets/starSmall.png'
import x from '../../assets/x.png'
import telegram from '../../assets/telegram.png'

import Roadmap from '../../components/Roadmap';
import Listing from '../../components/Listing';
import Footer from '../../components/Footer';

import Text1 from '../../assets/MrdWorld.png'
import XStar from '../../assets/XStar.png'
import Nenu from '../../assets/nenu.png (1).png'

import ButtonTop from '../../components/ButtonTop';



export const fetchMRDTokenData = () => {
  const options = { method: 'GET', headers: { accept: 'application/json' } };
  return fetch('https://api.ociswap.com/tokens/mrd', options)
    .then(response => response.json())
    .catch(err => {
      console.error(err);
      throw err;
    });
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2, // Limita o número a duas casas decimais
    minimumFractionDigits: 2, // Garante que sempre tenha duas casas decimais
  }).format(value);
};


function App() {

  const [valueNow, setValueNow] = useState(0.0000);
  const [capMek, setCapMek] = useState(0.0000);


  useEffect(() => {
    fetchMRDTokenData()
      .then(data => {
        const priceNow = parseFloat(data.price.usd['now']);
        const marketCapNow = parseFloat(data.market_cap.circulating.usd['now']);

        setValueNow(priceNow.toPrecision(4));
        setCapMek(formatCurrency(marketCapNow)); // Formata o market cap
      })
      .catch(err => {
        console.error('Erro ao buscar dados:', err);
      });
  }, []);






  return (
    <div className="App">
      <NavBar />



      <section className='content-info-tam org-contents'>
        <div >
          <img className='text-img' src={Text1} alt="" />
          <p>
            $MRD is more than just a token - it's the paradise of memecoins.
            Built on the Radix network (XRD),
            $MRD offers a unique and vibrant platform where memecoin culture thrives.
          </p>
        </div>

        <img className='logo-p1' src={logo} alt="memerad" />


      </section>


      <section className='content-info-tam'>

        <div className='tokens-distribution-content'>

          <div>
            <h1 className='neonText'>Token <br /> Distribution</h1>

            <div>
              <p>
                Price: ${valueNow ? valueNow : 'Calculando...'}
              </p>
              <p>
                Market Cap: {capMek ? capMek : 'Calculando...'}
              </p>



              <div className="buy-button-2">

                <img src={starSmall} alt="Logo" />
                <button>
                  <a href="https://ociswap.com/resource_rdx1t5u04cs3u2yxqkcwku7jdvdvv9cu739jsx0rdwu97682lr0rn92qdh" target="_blank" rel="noopener noreferrer">
                    BUY MRD
                  </a>

                </button>
              </div>
            </div>
          </div>


          <div className='line' />



          <div className='distribution'>
            <p>Public Sale: 90,66% (453,3 million tokens).</p>
            <a
              href="https://dashboard.radixdlt.com/account/account_rdx16998xell0000000000000000000000000000000000000000000000/tokens"
              target="_blank"
              rel="noopener noreferrer" // isso é importante por questões de segurança e performance
            >
              <p>
                Burn: 5,34% (26.7 million tokens).
              </p>
            </a>

            <a
              href="https://dashboard.radixdlt.com/account/account_rdx12xdmxkzcsg5amzt0vv7xv3d65el26q8nynyxakd8p2y0h89yp89uw3/tokens"
              target="_blank"
              rel="noopener noreferrer" // isso é importante por questões de segurança e performance
            >
              <p>Team: 2% (10 million tokens). </p>

            </a>

            <a
              href="https://dashboard.radixdlt.com/account/account_rdx12ympygg94kjqyc50ze0s9s0jnp0yvszkvce4t7jgjxf2pd39pur9gm/tokens"
              target="_blank"
              rel="noopener noreferrer" // isso é importante por questões de segurança e performance
            >
              <p>Incentive Reserve: 1% (5 million tokens). </p>

            </a>
            <a
              href="https://dashboard.radixdlt.com/account/account_rdx1287ha65655jsfnezmj0pzewydagew6ave86trcn64rvzyutfyrzjra/tokens"
              target="_blank"
              rel="noopener noreferrer" // isso é importante por questões de segurança e performance
            >
              <p>Advisors: 1% (5 million tokens).  </p>

            </a>

          </div>

        </div>


        <img className='XStar-1' src={XStar} alt="" />

      </section>


      <section className='content-info-tam roadmap'>
        <div className='text'>
          <img src={starSmall} alt="Logo" />
          <h1>ROADMAP</h1>
          <img src={starSmall} alt="Logo" />
        </div>


        <Roadmap />

        <img className='XStar-2' src={XStar} alt="" />




      </section>


      <section className='content-info-tam content-x-telegram'>

        <div className='content-text'>

          <p>
            Stay tuned for all the exciting updates from Memerad and make sure you don't miss a thing!
          </p>

        </div>

        <div className='content-xtl'>
          <a
            href="https://twitter.com/Memeradix"
            target="_blank"
            rel="noopener noreferrer" >
            <img src={x} alt="Logo" />
          </a>

          <a
            href="https://t.me/MEMERADIX"
            target="_blank"
            rel="noopener noreferrer" >
            <img src={telegram} alt="Logo" />
          </a>

        </div>

      </section>

      <img className='XStar-3' src={Nenu} alt="" />



      <section className='button-buy-mrd'>

        <a href="https://ociswap.com/resource_rdx1t5u04cs3u2yxqkcwku7jdvdvv9cu739jsx0rdwu97682lr0rn92qdh" target='_blank' rel="noopener noreferrer" >
          BUY MEMERAD
        </a>

      </section>

      <Listing />
      <Footer />

      <ButtonTop />



    </div>
  );
}

export default App;