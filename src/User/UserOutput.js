import React from 'react';

const userOutput = (props) => {
    return (
        <div className='user'>
            <p>Product Name: {props.name}</p>
            <p>Product Price: {props.price}</p>            
        </div>
    );
};

export default userOutput;