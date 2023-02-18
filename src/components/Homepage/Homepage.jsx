import React from 'react';

import './Homepage.scss';
import desktopImage from '../../Assets/images/image-web-3-desktop.jpg';

const Homepage = () => {
  return (
    <div className='upper-half'>

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

    </div>
  );
};

export default Homepage;