import React from 'react';
import './footer.css';
import { navLinks } from '../helpers/navLinks';

function createLinks() {
    return navLinks.map((e, idx) => (
        <p key={idx}><a href={e.ref}>{e.name}</a></p>
    ))
}

function Footer() {
  return (
    <div className='contactMe_container' id='contact'>
      <div className='contactMe_data_links'>
        <div>
            <p>Elmo Max</p>
            <p>New York City</p>
            <p>random@gmail.com</p>

        </div>
        <div>
            {createLinks()}
        </div>
      </div>
      <div style={{textAlign:'center'}}>Copyright&copy; {new Date().getFullYear()} All rights reserved</div>
    </div>
  )
}


export default Footer
