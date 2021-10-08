import React from 'react';
import {useTodos} from './useTodos';
import './App.css';
import {Footer} from '../Footer';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter/index.js';
import { TodoSearch } from '../TodoSearch/index.js';
import { TodoList } from '../TodoList/index.js';
import { TodoItem } from '../TodoItem/index.js';
import { CreateTodoButton } from '../CreateTodoButton/index.js';
import {Modal} from '../Modal';
import {TodoForm} from '../TodoForm';
import {MyLoader} from '../MyLoader/index.js';
import { EmpityTodos } from '../EmpityTodos';
import { EmpitySearchResults } from '../EmpitySearchResults';
import {ChangeAlert} from '../ChangeAlert';


function App() {

      const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        totalTodos, 
        completedTodos,
        searchValue, 
        setSearchValue,
        addTodo,
        sincronizeTodos,
      } = useTodos(); 


    return(
      <React.Fragment>
      <TodoHeader
      loading={loading}
      >
          <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          />
          <TodoSearch 
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
          />
        </TodoHeader>

        <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          totalTodos={totalTodos}
          onError={()=> 'Desesperate hubo un error'}
          onLoading={
            ()=> <MyLoader/>
          }
          onEmpityTodos={
            ()=><EmpityTodos/>
          }
          onEmpitySearchResults={
            ()=><EmpitySearchResults 
            searchText={searchValue}/>
          }
          render={todo => (
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
                )}
        >
          {/* {todo => (
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
                )} */}
        </TodoList>

        {!!openModal &&
            <Modal>
                <TodoForm
                addTodo={addTodo}
                setOpenModal={setOpenModal}
                />
            </Modal>
        }
            
        <CreateTodoButton
            error={error}
            loading={loading}
            setOpenModal={setOpenModal}
        />
        <Footer
        error={error}
        loading={loading}
        />

        <ChangeAlert 
          sincronize={sincronizeTodos}
        />
        </React.Fragment>
      );
}

export default App;
