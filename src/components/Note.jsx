import React from 'react';

function Note(props) {
    return (
        <div className='note'>
            <h1 name='title'>{props.title}</h1>
            <p name='content'>{props.content}</p>
        </div>
    )
}

export default Note;