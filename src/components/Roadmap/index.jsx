import React from 'react';
import './styles.css';
import starSmall from '../../assets/starSmall.png'




const Roadmap = () => {
    return (



        <div className="roadmap-container">
            <div>
                <div className="roadmap-item complete">

                    <div className="roadmap-title">Token launch / DEX listings</div>
                    <div className="roadmap-description">
                        The $MRD token was launched on March 24, 2024 on Ociswap, Cave Saino, DefiPlaza and can be purchased on Astrolisecent. No pre-sales, no ICO, same price for everyone.
                    </div>
                </div>


                <div className="roadmap-item complete">

                    <div className="roadmap-title">MRD bot</div>
                    <div className="roadmap-description">
                        We understand that we can be the biggest meme ever created and that's why a bot will be important for you to update prices and purchases!
                    </div>
                </div>


                <div className="roadmap-item complete">

                    <div className="roadmap-title">BURNED MRD</div>
                    <div className="roadmap-description">
                        26.7 million $MRD will be burned, contributing to the decentralization of the token and community trust.
                    </div>
                </div>

                <div className="roadmap-item">

                    <div className="roadmap-title">Listing Memerad Dao</div>
                    <div className="roadmap-description">
                        It's important for you to decide about our future.
                    </div>
                </div>

                <div className="roadmap-item">

                    <div className="roadmap-title">Apply for radix programs to increase liquidity.</div>
                    <div className="roadmap-description">
                        The growth of our beloved meme needs abundant liquidity, so we will need a lot of incentives.
                    </div>
                </div>
            </div>

            <div className='content-star'>
                <img src={starSmall} alt="Star" style={{ marginTop: '-1em' }} />
                <img src={starSmall} alt="Star" style={{ marginTop: '5em' }} />
                <img src={starSmall} alt="Star" style={{ marginTop: '5em' }} />
                <img src={starSmall} alt="Star" style={{ marginTop: '4em' }} />
                <img src={starSmall} alt="Star" style={{ marginTop: '4em' }} />
                <img src={starSmall} alt="Star" style={{ marginTop: '4em' }} />
                <img src={starSmall} alt="Star" style={{ marginTop: '2em' }} />
                <img src={starSmall} alt="Star" style={{ marginTop: '3em' }} />
                <img src={starSmall} alt="Star" style={{ marginTop: '3em' }} />
                <img src={starSmall} alt="Star" style={{ marginTop: '4em' }} />
                <img src={starSmall} alt="Star" style={{ marginTop: '6.2em' }} />
            </div>


            <div className="top-content">
                <div className="roadmap-item complete">

                    <div className="roadmap-title">Website launch</div>
                    <div className="roadmap-description">
                        Every self-respecting meme should have its own website. Now this great place where the $MRD family could find all the necessary information about the project has come to an end.
                    </div>
                </div>


                <div className="roadmap-item complete">

                    <div className="roadmap-title">Start of marketing campaigns to increase adoption.</div>
                    <div className="roadmap-description">
                        The root community needs to know that we are here to stay and we are going to cause a stir here, partnerships with influencers are at this stage.
                    </div>
                </div>


                <div className="roadmap-item complete">

                    <div className="roadmap-title">Listing on Radix Ecosystem.</div>
                    <div className="roadmap-description">
                        Integration on the official radix website will be a great honor for XRD biggest meme.
                    </div>
                </div>

                <div className="roadmap-item">

                    <div className="roadmap-title">NFT Collection</div>
                    <div className="roadmap-description">
                        While we are not yet ready to publicly release the details of our NFT Collection, one thing has become clear: our community wants adorable and charming NFTs; and they show great enthusiasm. We are paying attention to this.
                    </div>
                </div>

                <div className="roadmap-item">

                    <div className="roadmap-title">Memeradex</div>
                    <div className="roadmap-description">
                        The only rule of this dex will be the exclusive trading of memes, the world has never seen this happen.
                    </div>
                </div>


                <div className="roadmap-item end-item">

                    <div className="roadmap-title">MEMERAD the world </div>
                    <div className="roadmap-description">
                        There is a big world to be discovered, radix will be big and we want to be the biggest in this new ecosystem, help us with this goal?
                    </div>
                </div>
            </div>

        </div>




    );
};

export default Roadmap;
