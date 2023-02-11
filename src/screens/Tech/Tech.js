import React from 'react';
import { FaReact } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import './tech.css';

function Tech() {
  return (
    <div className='technologies_container' id='technologies'>
        <div>
            <h1 style={{textAlign:'center'}}>Some of the technologies I use</h1>
        </div>
        <div className='tech_cards_container'>
            <div className='tech_card'>
                <h3 className='tech_icons'  ><FaReact /></h3>
                <span style={{margin:'5px', fontSize:'1.5rem'}}>React</span>
            </div>
            <div className='tech_card'>
                <h3 className='tech_icons'  ><FaJs /></h3>
                <span style={{margin:'5px', fontSize:'1.5rem'}}>JavaScript</span>
            </div>
            <div className='tech_card'>
                <h3 className='tech_icons'  ><FaCss3 /></h3>
                <span style={{margin:'5px', fontSize:'1.5rem'}}>CSS</span>
            </div>
            <div className='tech_card'>
                <h3 className='tech_icons'  ><FaHtml5 /></h3>
                <span style={{margin:'5px', fontSize:'1.5rem'}}>HTML5</span>
            </div>
            <div className='tech_card'>
                <h3 className='tech_icons'  ><FaGithub /></h3>
                <span style={{margin:'5px', fontSize:'1.5rem'}}>GitHub</span>
            </div>
            <div className='tech_card'>
                <h3 className='tech_icons'  ><FaBootstrap /></h3>
                <span style={{margin:'5px', fontSize:'1.5rem'}}>Bootstrap</span>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Tech

