import React from 'react';
import CardStarWars from './CardsStarWars';
import { Container, Row } from 'reactstrap';


function CardsList(props) {
    return (
    <Container>
        <Row>
        {props.characterArray.map(character => {
            return (
            <CardStarWars key={character.created} character={character}/>
                    )
                })
            }
            </Row>
        </Container>
    )
}

export default CardsList;