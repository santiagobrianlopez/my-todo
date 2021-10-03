import React from 'react';
import {TodoProvider} from '../TodoContext';
import { AppUI } from './AppUI';
import './App.css';
import {Footer} from '../Footer';

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Cortar Tomates', completed: false},
//   {text: 'Cortar Apio', completed: false},
// ];



function App() { 
  return (
    <TodoProvider>
      <AppUI/>
      <Footer/>
    </TodoProvider>
  );
}

export default App;
