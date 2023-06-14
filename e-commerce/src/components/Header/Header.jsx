import React from 'react';
import './Header.css'
import Logo from '../../assets/img.jpg';


export const Header = () => {
    return (
    
        <div className='header'>
            <a href="*">
                <img src={Logo} alt="Logo"/>
            </a>
            <h1>NavBar</h1>
        </div>
    );
};

