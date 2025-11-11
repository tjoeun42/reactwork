import TodoItem from './TodoItem';
import "./List.css";

const List = ({todos}) => {
    return (
        <div className='list'>
            <h2>Todo List 🌱</h2>
            <input placeholder="검색어를 넣어주세요" />
            <div className='todos_wrap'>
                {
                    // todos.map((todo) => <TodoItem todos={todo}}/>)   // 1.
                    todos.map((todo) => <TodoItem {...todo} />)   // 2.          
                }
            </div>
        </div>
    )
}
export default List;