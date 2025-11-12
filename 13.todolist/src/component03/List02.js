import TodoItem from './TodoItem';
import "./List.css";
import { useState } from 'react';

// 검색하기
const List = ({todos}) => {
    const [search, setSearch] = useState('');

    const getFilteredData = () => {
        if(search === "") {
            return todos;
        }
        return todos.filter(todo => 
            // todo.content.includes(search)  // 대소문자 가림
            todo.content.toLowerCase().includes(search.toLowerCase())
        )
    }

    return (
        <div className='list'>
            <h2>Todo List 🌱</h2>
            <input placeholder="검색어를 넣어주세요" 
                onChange={(e) => {setSearch(e.target.value)}}
            />
            <div className='todos_wrap'>
                {  
                    getFilteredData().map(todo => <TodoItem {...todo} />)         
                }
            </div>
        </div>
    )
}
export default List;