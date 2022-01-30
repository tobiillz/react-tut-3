import React from 'react';
import avatar from '../avatar.jpg'
import '../App.css'

function Info() {
  return <div className='info-container'>
      <div className='info-details'>
        <img src={avatar} alt="Avatar" className='avatar' />
        <h2>Laura Sherfield</h2>
        <p className='gold'>Frontend Developer</p>
        <p>Laura's website</p>
      </div>
      <div className='info-btns'>
          <button id="email" className='btns'>Email</button>
          <button id="linkedin" className='btns'>LinkedIn</button>
      </div>
  </div>;
}

export default Info;
