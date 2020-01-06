import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {CleanName} from '../DataHelpers';

function TraitsView(props) {
    let match = props.match;
    let timeMinutes = props.timeMinutes;
    function placement(n) {
        switch(n){
            case 1: return '1st'
            case 2: return '2nd'
            case 3: return '3rd'
            default: return `${n}th`
        }
    }
    return (
        <Card>
            <Card.Header>{`${placement(match.playerStats.placement)} Place`}</Card.Header>
            <Card.Body>
                <ListGroup>
                    <ListGroup.Item>
                        <Card.Text>Top Traits</Card.Text>
                        <Card.Text>{match.traits.sort((a,b) => b.tier_current - a.tier_current).map(trait => CleanName(trait.name)).slice(0,3).join(', ')}</Card.Text>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Card.Text>Top Units</Card.Text>
                        <Card.Text>{match.units.sort((a,b) => b.tier - a.tier).map(unit => unit.name).slice(0,3).join(', ')}</Card.Text>
                    </ListGroup.Item>
                    {match.playerStats.placement > 0 && 
                    <ListGroup.Item>
                        {`Time Eliminated: ${timeMinutes(match.timeEliminated)}`}
                    </ListGroup.Item>}
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default TraitsView