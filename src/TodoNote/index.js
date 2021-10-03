import React from 'react';
import './TodoNote.css'

function TodoNote(props)  {

    const onCancel = () => {
        props.setOpenModal2(false);
    }
    
    return(
        <div className="TodoNote" >
            <h2>{props.text}</h2>
            <p>{props.textArea}</p>
            <button type="button" onClick={onCancel}>Regresar</button>
        </div>
    );
}

export {TodoNote};