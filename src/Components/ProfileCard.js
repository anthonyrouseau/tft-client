import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import LoadingSpinner from './LoadingSpinner';

function ProfileCard(props) {
    let profile = props.profile;
    return (
        <Card style={{width: '300px'}}>
            <Card.Header>Player Profile</Card.Header>
            {profile.name ? 
            <Card.Body>
                <Card.Title>{profile.name}</Card.Title>
                <Card.Subtitle><Image src={profile.tierLink} fluid/>{`${profile.tier} ${profile.rank}`}</Card.Subtitle>
                <Card.Text>Placeholder text</Card.Text>
                <ListGroup variant='flush'>
                    <ListGroup.Item>{`Wins: ${profile.wins}`}</ListGroup.Item>
                    {profile.hotStreak && <ListGroup.Item>Hot Streak!</ListGroup.Item>}
                </ListGroup>
            </Card.Body> :
            <LoadingSpinner />}
        </Card>
    );
}

export default ProfileCard