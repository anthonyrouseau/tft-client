import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import TraitCard from './TraitCard';

function TraitsView(props) {
    let traits = props.traits;
    let id = props.id;
    return (
        <Accordion>
            {traits.sort((a,b) => b.tier_current - a.tier_current).map( trait => <TraitCard key={`${id}-${trait.name}`} trait={trait} id={`${id}-${trait.name}`}></TraitCard>)}
        </Accordion>
    );
}

export default TraitsView