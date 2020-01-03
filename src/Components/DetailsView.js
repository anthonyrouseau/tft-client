import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function DetailsView(props) {
    let match = props.match;
    let timeMinutes = props.timeMinutes;
    return (
        <ListGroup>
            <ListGroup.Item>{`Date: ${new Date(match.timeStart).toLocaleDateString()}`}</ListGroup.Item>
            <ListGroup.Item>{`Start Time: ${new Date(match.timeStart).toLocaleTimeString()}`}</ListGroup.Item>
            <ListGroup.Item>{`Game Length: ${timeMinutes(match.gameLength)}`}</ListGroup.Item>
            <ListGroup.Item>{`Last Round: ${match.lastRound}`}</ListGroup.Item>
            <ListGroup.Item>{`Time Eliminated: ${timeMinutes(match.timeEliminated)}`}</ListGroup.Item>
            <ListGroup.Item>{`Players Eliminated: ${match.playersEliminated}`}</ListGroup.Item>
            <ListGroup.Item>{`Gold Left: ${match.goldLeft}`}</ListGroup.Item>
            <ListGroup.Item>{`ID: ${match.id}`}</ListGroup.Item>
        </ListGroup>
    );
}

export default DetailsView