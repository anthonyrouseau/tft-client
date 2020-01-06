import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


function SummonerSearch(props) {
    function handleSearch(e) {
        e.preventDefault();
        let search = document.getElementById("summoner-search");
        if(search.value !== ""){
            props.setName(search.value);
        }
        search.value = "";
    }
    return (
        <InputGroup className="mb-3">
            <FormControl 
                placeholder="Summoner Name"
                aria-label="Summoner Name"
                id="summoner-search"
            />
            <InputGroup.Append>
                <Button onClick={handleSearch} variant="outline-secondary">Search</Button>
            </InputGroup.Append>
        </InputGroup>
    );
}

export default SummonerSearch