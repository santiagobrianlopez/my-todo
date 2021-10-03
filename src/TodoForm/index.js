import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';


function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const [newTodoValueArea, setNewTodoValueArea] = React.useState('');
    
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onChangeArea = (event) => {
        setNewTodoValueArea(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue, newTodoValueArea);
        setOpenModal(false);
    }

    // console.log(newTodoValue)
    // console.log(newTodoValueArea)


    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nueva Tarea</label>
            <input 
            className="Titulo"
            placeholder='Ingresa un nuevo Titulo'
            value={newTodoValue}
            onChange={onChange} 
            maxLength='30'
            ></input>
            <textarea
                value={newTodoValueArea}
                onChange={onChangeArea} 
                placeholder='Ingresa la 
                descripción de tu nueva 
                tarea solo con 140 caracteres'
                maxLength='140'
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>

                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {TodoForm}