import React from 'react';
import '../App.css';
import instagram from '../instagram.png';
import twitter from '../twitter.png';
import facebook from '../facebook.png';
import github from '../github.png';

function Footer() {
  return <div className='footer'>
      <div className='center'>
        <img src={twitter} alt="twitter" />
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={github} alt="github" />
      </div>
  </div>;
}

export default Footer;
