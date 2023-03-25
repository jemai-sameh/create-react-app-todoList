import './App.css';
import {TodoInput} from "./Components/TodoInput";
import { TodoList } from './Components/TodoList';
function App() {
  return (
    <div className="App">
      <h1>React todo app</h1>
      <TodoInput/>
      <TodoList/>

    </div>
  );
}

export default App;
