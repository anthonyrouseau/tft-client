import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

function TraitCard(props) {
    let trait = props.trait;
    let weight = trait.tier_current > 0 ? "bold" : "normal";
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey={props.id} style={{fontWeight: weight}}>{trait.name}</Accordion.Toggle>
            <Accordion.Collapse eventKey={props.id}>
                <Card.Body>
                    <ListGroup>
                        <ListGroup.Item>{`Tier: ${trait.tier_current}`}</ListGroup.Item>
                        <ListGroup.Item>{`Units: ${trait.num_units}`}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

export default TraitCard