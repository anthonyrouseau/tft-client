import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import UnitCard from './UnitCard';

function TeamView(props) {
    let units = props.units;
    let id = props.id;
    return (
        <Accordion>
            {units.map( unit => 
            <UnitCard key={`${unit.id}-${unit.character_id}`} unit={unit} id={`${id}-${unit.character_id}`}></UnitCard>)}
        </Accordion>
    );
}

export default TeamView