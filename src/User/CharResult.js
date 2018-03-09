import React from 'react';

const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '3px solid black',
    width: '10px'
  };

const charResult = (props) => {
    return (
        <p style={style} onClick={props.click}>{props.char}</p>
    );
};

export default charResult;