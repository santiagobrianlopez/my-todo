import React from "react";
import {CreateTodoButtonForm} from '../CreateTodoButtonForm'

function CreateTodoButton(props){

    return (!props.loading && !props.error) &&  <CreateTodoButtonForm
            setOpenModal={props.setOpenModal}/>;
}

export {CreateTodoButton};