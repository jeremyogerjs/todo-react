const TodoItem = (props) => {

    return (
        <li className='todoItem'>{props.name} <span className='deleteItem' onClick={() => props.remove(props.id)} >X</span> </li>
    )
};

export default TodoItem;