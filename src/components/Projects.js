import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import weather from '../assets/images/weather-app.jpg';
import todo from '../assets/images/todo-app.jpg';

const Projects = () => {

    const cardInfo = [
        {image: weather, title: 'Weather App', text: 'this is a weather app'},
        {image: todo, title: 'Todo App', text: 'this is a todo app'},
    ];

    const displayCard = (card, index) => {
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top"  src={card.image} />
            <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        );
    }

    return (
        <div id='projects'>
            {cardInfo.map(displayCard)}
        </div>
    );
}

export default Projects;