import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){

    const {
        item:todos,
        saveItem:saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);

    
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);

    
      // Estamos validando si nuestra propiedad completed es verdadero atravez de la doble falsa con el simbolo !!
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if(!searchValue.length >= 1){
        searchedTodos = todos;
      }else{
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          
          return todoText.includes(searchText);
        })
      }
    
      const addTodo = (text,textArea) =>{
        const newTodos = [...todos];
        // console.log(todos);
        newTodos.push({
          completed:false,
          text:text,
          textArea:textArea,
        }); 
    
        saveTodos(newTodos);
        
      };
    
      const completeTodo = (text) =>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
    
        const newTodos = [...todos];
    
        newTodos[todoIndex].completed = true; 
    
        saveTodos(newTodos);
        
      };
    
      const deleteTodo = (text) =>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
    
        const newTodos = [...todos];
    
        newTodos.splice(todoIndex, 1);
    
        saveTodos(newTodos);
        
      };    

      // console.log(todos)

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            addTodo,
      
            searchValue,
            setSearchValue,
            searchedTodos,
            
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext,TodoProvider}