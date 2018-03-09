import React from 'react';

const validation = (props) => {
    return (
        <p> {props.txtCount > 5 ? 'Text long enough' : 'Text too short'} </p>        
    );
};

export default validation;