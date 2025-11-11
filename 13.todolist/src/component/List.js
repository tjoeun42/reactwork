import TodoItem from './TodoItem';
import "./List.css";
const List = () => {
    return (
        <div className='list'>
            <h2>Todo List 🌱</h2>
            <input placeholder="검색어를 넣어주세요" />
            <div className='todos_wrap'>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    )
}
export default List;