import TodoItem from './todo';

const TodoList = (props) => {

    let removeItem = (el) => {
        const newList = props.todoList.filter(elem => elem.id !== el);
        props.setTodoList(newList);
    }

    return (
        <div className='todoList'>
            <ul>
            { 
                props.todoList.map(item => {
                return <TodoItem id={item.id} key={item.id} name={item.name} remove={removeItem} />
                }) 
            }
            </ul>
        </div>
    );
};

export default TodoList;