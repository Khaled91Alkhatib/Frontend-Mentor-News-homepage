import React from 'react';

import './Homepage.scss';
import desktopImage from '../../Assets/images/image-web-3-desktop.jpg';
import image1 from '../../Assets/images/image-retro-pcs.jpg';
import image2 from '../../Assets/images/image-top-laptops.jpg';
import image3 from '../../Assets/images/image-gaming-growth.jpg';

const Homepage = () => {
  return (
    <div className='upper-half'>

      <div style={{ display: 'flex' }}>
        <div>
          <div>
            <img className='image' src={desktopImage} alt='desktop' />
          </div>

          <div>
            <div className='info-under-pic'>
              <div className='title'>The Bright Future of Web 3.0?</div>
              <div className='paragraph'>
                <div className='small-paragraph'>
                  We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </div>
                <button>READ MORE</button>
              </div>
            </div>
          </div>
        </div>

        <div className='new-data'>
          <div className='new-container'>
            <h2 className='test'>New</h2>

            <h3>Hydrogen VS Electric Cars</h3>
            <div>Will hydrogen-fueled cars ever catch up to EVs?</div>

            <h3>The Downsides of AI Artistry</h3>
            <div>What are the possible adverse effects of on-demand AI image generation?</div>

            <h3>Is VC Funding Drying Up?</h3>
            <div>Private funding by VC firms is down 50% YOY. We take a look at what that means.</div>
          </div>
        </div>
        <div>
        </div>
      </div>

      <div className='lower-titles'>

        <div className='image-to-text'>
          <img className='lower-image' src={image1} alt='first' />
          <div>
            <h3>01</h3>
            <div>
              Reviving Retro PCs
              What happens when old PCs are given modern upgrades?
            </div>
          </div>
        </div>

        <div className='image-to-text'>
          <img className='lower-image' src={image2} alt='second' />
          <div>
            <h3>02</h3>
            <div>
              Top 10 Laptops of 2022
              Our best picks for various needs and budgets.
            </div>
          </div>
        </div>

        <div className='image-to-text'>
          <img className='lower-image' src={image3} alt='third' />
          <div>
            <h3>03</h3>
            <div>
              The Growth of Gaming
              How the pandemic has sparked fresh opportunities.
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Homepage;

// 01
//   Reviving Retro PCs
//   What happens when old PCs are given modern upgrades?

//   02
//   Top 10 Laptops of 2022
//   Our best picks for various needs and budgets.

//   03
//   The Growth of Gaming
//   How the pandemic has sparked fresh opportunities.