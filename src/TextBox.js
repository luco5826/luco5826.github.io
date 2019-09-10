import React from 'react';
import './TextBox.css'


const TextBox = ({ textInputChange, border, greeting }) => {
    return (
        <div className='f2'>
            <div className='ma4 white'>
                <h2>Do you think it's </h2>
                <h1 className='grow'>palindrome?</h1>
            </div>
            <input
                className={`br4 bw3 ${border} pa3`}
                type='text'
                placeholder='Type a word'
                onChange={textInputChange} />
            <h2 className='white grow'>{greeting}</h2>

        </div>
    );
}

export default TextBox;