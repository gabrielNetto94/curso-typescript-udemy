import React, { useState } from 'react';
const State = () => {
    const [text, setText] = useState(null);
    const handleChange = (e) => {
        setText(e.target.value);
    };
    return (<div>
            <p>O texto é: {text}</p>
            <input type='text' onChange={handleChange}></input>
        </div>);
};
export default State;
