import React from 'react';

const userInput = (props) => {
    const style = {
        margin: '16px',
        padding: '8px',
        border: '1px solid #ccc',
        width: '200px'
    };

    return (
        <div>
            <input style={style} type="text" onChange={props.change} value={props.name} />            
        </div>
    );
};

export default userInput;