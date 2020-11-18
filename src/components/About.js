import React from 'react';
import Image from 'react-bootstrap/Image';
import Me from '../assets/images/profile.png';

const About = () => {
    return (
        <div id='about'>
            <Image src={Me} roundedCircle />
            {/* <div className='title'>Who am I?</div> */}
            
        </div>
    );
}

export default About;