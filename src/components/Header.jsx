import React, { useEffect } from "react";
import './Header.css';
import Typewriter from 'typewriter-effect/dist/core';

export default function Header() {
    useEffect(() => {
        new Typewriter('#typewriter', {
            strings: ['Web Developer.', 'App Developer.', 'Student.'],
            autoStart: true,
            loop: true,
        });
    }, []);

    return (
        <header id="header">
            <div className="content">
                <h1>
                    Welcome,<br />
                    my name is Justin Storm,<br />
                    I am a <span id="typewriter"></span>
                </h1>
                <button onClick={(e) => {e.preventDefault(); document.querySelector('#about')?.scrollIntoView()}}>Learn More</button>
            </div>
        </header>
    );
}
