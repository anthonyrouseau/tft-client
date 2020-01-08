import React from 'react';
import Alert from 'react-bootstrap/Alert';

function ErrorAlert(props) {
    return (
        <Alert variant={props.error.type}>
            {props.error.message}
        </Alert>
    );
}

export default ErrorAlert;