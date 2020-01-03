import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

function UnitCard(props) {
    let unit = props.unit;
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey={props.id}>{unit.name}</Accordion.Toggle>
            <Accordion.Collapse eventKey={props.id}>
                <Card.Body>
                    <ListGroup>
                        <ListGroup.Item>{`Tier: ${unit.tier}`}</ListGroup.Item>
                        <ListGroup.Item>
                            Items:
                            {unit.items.length > 0 && <ListGroup horizontal>
                                {unit.items.map( (item,i) => <ListGroup.Item className="mr-auto ml-auto mt-3" key={`${item.id}-${i}`}>
                                    <Image src={item.imageLink} thumbnail/>
                                </ListGroup.Item>)}
                            </ListGroup>}
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

export default UnitCard