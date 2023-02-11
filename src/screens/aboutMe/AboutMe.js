import React from 'react'
import './aboutMe.css'

import person from '../img/person.png'

function aboutMe() {
  return (
    <div className='about_container' id='about-me'>
      <div>
        <img src={person} alt='avatar' />
      </div>
      <div className='about_text'>
        <h1>ABOUT ME</h1>
        <p>
          My name is WIlliam Zhicay. I am a motivated programmer who loves to make things work. I'm always looking for ways to improve my skills and learn new things. 
          I am passionate about making the world a better place, and I am always looking for ways to help others. I am an excellent communicator and problem solver.
        </p>
        <hr />
      </div>
    </div>
  )
}

export default aboutMe
