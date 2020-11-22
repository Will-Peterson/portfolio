import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import weather from '../assets/images/weather-app.jpg';
import todo from '../assets/images/todo-app.jpg';
import asciicodews from '../assets/images/asciicodews.jpg';
import toroelectricnet from '../assets/images/toroelectricnet.jpg';
import sixsigmacatapultscom from '../assets/images/sixsigmacatapultscom.jpg';

const Projects = () => {

    const projectInfo = [
        {id: 1, image: weather, title: 'Weather App', text: 'this is a weather app'},
        {id: 2, image: todo, title: 'Todo App', text: 'this is a todo app'},
        {id: 3, image: todo, title: 'read with angel', text: 'game'},
        {id: 4, image: asciicodews, title: 'Asciicode.ws', text: 'website'},
        {id: 5, image: toroelectricnet, title: 'toroelectric.net', text: 'website'},
        {id: 6, image: sixsigmacatapultscom, title: 'sixsigmacatapults.com', text: 'website'}
    ];

    return (
        <div id='projects'>
            {projectInfo.map((project, index) => (
                <div className='projects-cards'>
                    <Card bg='light' text='info' style={{ width: '18rem', height: '400px'}}>
                    <Card.Img variant='top' src={project.image} />
                    <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>{project.text}</Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default Projects;