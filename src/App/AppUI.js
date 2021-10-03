import React from 'react';

import {TodoContext} from '../TodoContext';
import { TodoCounter } from '../TodoCounter/index.js';
import { TodoSearch } from '../TodoSearch/index.js';
import { TodoList } from '../TodoList/index.js';
import { TodoItem } from '../TodoItem/index.js';
import { CreateTodoButton } from '../CreateTodoButton/index.js';
import {Modal} from '../Modal';
import {TodoForm} from '../TodoForm';
import {MyLoader} from '../MyLoader/index.js';

function AppUI()  {

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return(
        <React.Fragment>
        <TodoCounter/>
        <TodoSearch />
        <TodoList>

            {error && 'Desesperate hubo un error'}
            {loading && <MyLoader/>}
            {(!loading && !searchedTodos.length) && <h3>Crea tu primera Tarea</h3>}
            {searchedTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text} 
            textArea={todo.textArea}
            completed={todo.completed} 
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            openModal={openModal}
            setOpenModal={setOpenModal}
            />
            ))}
        
        </TodoList>

        {!!openModal &&
            <Modal>
                <TodoForm/>
            </Modal>
        }
            
        <CreateTodoButton
            setOpenModal={setOpenModal}
        />
        </React.Fragment>
    );
}

export {AppUI};