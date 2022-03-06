const TodoItem = (props) => {

    return (
        <li className='todoItem'>{props.name}
            <span>{props.statut == 0 ? "A faire" : "Fait"}</span>
            <span className='deleteItem' onClick={() => props.remove(props.id)} >X</span>
            <button onClick={() => props.setSTatut(props.id)}>{props.statut == 0 ? "Fait" : "A faire"}</button>
        </li>
    )
};

export default TodoItem;