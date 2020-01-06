import React from 'react';
import Form from 'react-bootstrap/Form';

function FilterGroup(props) {
    let filters = props.filters;
    let sections = Object.keys(filters).sort();

    function toggleSelected(e){
        let parsed = e.target.id.split("-");
        let section = parsed[0];
        let value = parsed[1];
        if(props.selected[section].filter(item => item === value).length === 0){
            let newState = {...props.selected};
            newState[section].push(value);
            props.setSelected(newState);
        }else{
            let newState = {...props.selected};
            newState[section] = newState[section].filter(item => item !== value);
            props.setSelected(newState);
        }

    }
    return (
        <Form>
            {sections.map(section => 
                <Form.Group key={`filter-${section}`} id={`filter-${section}`}>
                    <Form.Label>{`${section.toUpperCase()}`}</Form.Label>
                    <br></br>
                    {filters[section].map(item => 
                        <Form.Check 
                            inline
                            type="checkbox"
                            label={item}
                            id={`${section}-${item}`}
                            key={`filter-${item}`}
                            onClick={toggleSelected}
                        />
                    )}
                </Form.Group>
            )}
        </Form>
        
    );
}

export default FilterGroup