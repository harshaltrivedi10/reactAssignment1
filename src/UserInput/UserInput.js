import React from 'react';
import './UserInput.css';

const userInput = (props) => {

    return(
        <div className = "UserInput">
            <input
                onChange = { props.change }
                type="text"
                value = {props.name}/>
        </div>
    );

}

export default userInput;