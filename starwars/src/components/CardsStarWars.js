import React from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    Col
  } from "reactstrap";
import './StarWars.css';



function CardStarWars(props) {
// const images = require.context('./assets/img', true);
// let img = images('./' + props.character.height);
    return (
        <Col xs="12" sm="4" xl="3">
            <Card style={{ backgroundColor: 'black', borderColor: 'yellow', color: "yellow" }}>
                <CardBody>
                {/* <CardImg top width="100%" src={img} alt="Card image cap" /> */}
                    <CardTitle>{props.character.name}</CardTitle>
                    <CardSubtitle>Date of Birth: {props.character.birth_year}</CardSubtitle>
                    <CardSubtitle>Height: {props.character.height} cm</CardSubtitle>
                    <CardSubtitle>Mass: {props.character.mass} kg</CardSubtitle>
                    <CardSubtitle>Gender: {props.character.gender}</CardSubtitle>
                    <CardSubtitle>Eye Color: {props.character.eye_color}</CardSubtitle>
                    <CardSubtitle>Homeworld: {props.character.homeworld}</CardSubtitle>
                </CardBody>
            </Card>
        </Col>
    )
}

export default CardStarWars