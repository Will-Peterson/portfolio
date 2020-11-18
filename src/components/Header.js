import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Header = () => {
    return (
        <div id='header'>
            <Jumbotron>
                <div className="header">
                    Hi, I'm Will!
                </div>
                <h2>I'm a front-end web developer.</h2>
            </Jumbotron>
        </div>
    );
}

export default Header;