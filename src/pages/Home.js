
import TodoList from '../components/todoList';

const Home = () => {
    let todoList = [];

    return (
        <div>
            <TodoList todoList={todoList} />
        </div>
    )
}


export default Home;