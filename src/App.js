import { useState } from 'react';
import './App.css';
import {TodoInput} from "./Components/TodoInput";
import { TodoList } from './Components/TodoList';
function App() {
  const {todo,setTodo}=useState[""]
  const addTodo=()=>{
    
  };
  return (
    <div className="App">
      <h1>React todo app</h1>
      <TodoInput todo={todo} setTodo={setTodo} />
      <TodoList/>
    </div>
  );
}

export default App;
