import React from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import TeamView from './TeamView';
import TraitsView from './TraitsView';
import DetailsView from './DetailsView';
import MatchOverview from './MatchOverviewCard';

function MatchCard(props) {
    const [view, setView] = React.useState("");
    let match = props.match;
    function timeMinutes(s) {
        let seconds = `0${Math.round(s % 60)}`;
        let minutes = Math.round(s/60);
        return `${minutes}:${seconds.slice(seconds.length-2)}`
    }
    function getView(view) {
        switch(view){
            case 'team': return (
                <TeamView units={match.units} id={match.id}/>
            )
            case 'traits': return (
                <TraitsView traits={match.traits} id={match.id}/>
            )
            case 'details': return (
                <DetailsView match={match} timeMinutes={timeMinutes}/>
            )
            default: return (
                <MatchOverview match={match} timeMinutes={timeMinutes}/>
            )
        }
    }
    return (
        <Card style={{width: '400px'}}>
            <Card.Header>
                <Nav variant='tabs' defaultActiveKey='overview'>
                    <Nav.Item><Nav.Link onSelect={() => setView('overview')} eventKey='overview'>Overview</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link onSelect={() => setView('team')} eventKey='team'>Team</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link onSelect={() => setView('traits')} eventKey='traits'>Traits</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link onSelect={() => setView('details')} eventKey='details'>Details</Nav.Link></Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>{getView(view)}</Card.Body>
        </Card>
    );
}

export default MatchCard