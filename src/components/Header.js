import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Me from '../assets/images/profile.png';

const Header = () => {
    return (
        <div id='home'>
            {/* <Container  style={{padding: '0 !important'}} className="p-3"> */}
                <Jumbotron>

                    <Image src={Me} roundedCircle />
                    <h1 className="header">Hi, I'm Will!</h1>
                    <h2>I'm a front-end web developer.</h2>
                    
                    
                </Jumbotron>
            {/* </Container> */}
        </div>
    );
}

export default Header;