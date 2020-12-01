import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <a href='#header'>Home </a>|
            <a href='#about'> About </a>|
            <a href='#projects'> Projects </a>|
            <a href='#contact'> Contact</a>
            <span>&copy; {new Date().getFullYear()} <a href='www.williamrpeterson.com'>williamrpeterson.com</a></span>
        </div>
    );
}

export default Footer;