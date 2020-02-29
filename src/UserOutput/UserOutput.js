import React from 'react';

const userOutput = (props) => {
    
    const style = {
        textAlign: 'inherit',
        border: '2px dashed green',
        padding: '5px auto'
    };

    return(
        <div style = { style }>
            <p>This is { props.username }</p>
            <p>I am here!</p>
        </div>
    );
}

export default userOutput;