import React from 'react';

const userInput = (props) => {
    const style = {
        margin: '16px',
        padding: '8px',
        border: '1px solid #ccc',
        width: '200px'
      };

    return (
        <input style={style} type="text" onChange={props.change} value={props.name}/>
    );
};

export default userInput;