import './App.css';
import React,{ useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './components/todoList';

function App() {
  const [todo,setTodo] = useState('');
  const [todoList,setTodoList] = useState([]);

  let handleChange = (e) => {
    setTodo(e.target.value);
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    const newList = todoList.concat({name:todo,id:uuidv4()});
    setTodoList(newList);
    setTodo('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>TODO LIST</h3>
      </header>
      <div className='card'>
        <form onSubmit={handleSubmit}>
          <label>todo</label>
          <input type="text" name="todo" value={todo} onChange={handleChange}></input>

          <button type='submit' className='card-btn'>Ajouter</button>
        </form>
      </div>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
