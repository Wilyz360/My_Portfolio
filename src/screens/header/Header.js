import React from 'react';
import './header.css';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

export default function Header() {
    const el = useRef(null);

    useEffect( () => {
        const typed = new Typed(el.current, {
            strings: ["A Developer", "A Gamer", "Or...", "A Lazzy person :(", " ", " ", " "],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true,
            cursorChar: ''
        });

        return () => {
            typed.destroy();
        }
    }, []);

    return (
        <div className='main-info' id='#home'>
            <h1>What I am?</h1>
            <span ref={el}></span>
        </div>
    )
}
