import React from "react";
import './CreateTodoButtonForm.css'

function CreateTodoButtonForm(props){
    
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };


    return (
    <button className="CreateTodoButton" 
    onClick={onClickButton}>
        +</button>
        );
}

export {CreateTodoButtonForm};