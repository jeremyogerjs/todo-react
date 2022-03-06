import TodoItem from './todo';
import React,{ useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const TodoList = (props) => {

    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState(props.todoList);

    let handleChange = (e) => {
        setTodo(e.target.value);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        const newList = todoList.concat({ name: todo, id: uuidv4(),statut:0 });
        setTodoList(newList);
        setTodo('');
    }

    let removeItem = (el) => {
        const newList = todoList.filter(elem => elem.id !== el);
        setTodoList(newList);
    }

    let setSTatut = (el) => {
        let element = todoList.find(item => item.id == el);
        let indexOf = todoList.findIndex(item => item.id == el);
        console.log("index: ", indexOf);
        if(element.statut) {
            element.statut = 0;
        } else {
            element.statut = 1;
        }

        setTodoList(todoList.splice(indexOf,1,element));
    }
    return (
        <div>
            <div className='card'>
                <form onSubmit={handleSubmit}>
                    <label>todo</label>
                    <input type="text" name="todo" value={todo} onChange={handleChange}></input>

                    <button type='submit' className='card-btn'>Ajouter</button>
                </form>
            </div>
            <div className='todoList'>
                <ul>
                    {
                        todoList.map(item => {
                            return <TodoItem id={item.id} key={item.id} name={item.name} statut={item.statut} setSTatut={setSTatut} remove={removeItem} />
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default TodoList;