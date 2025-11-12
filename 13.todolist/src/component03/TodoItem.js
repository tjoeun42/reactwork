import "./TodoItem.css";
// 1. 로 넘어오고 props로 받으면
// const TodoItem = (props) => {  사용시 : props.todos.id   props.todos.isDone 
// 1. 로 넘어오고 객체분해할당으로 받으면  
// const TodoItem = ({todos}) => { 사용시 : todos.id   todos.isDone 

// 2. 로 넘어오고 객체분해할당으로 받으면
const TodoItem = ({id, isDone, content, date}) => {
    return (
        <div className="todoItem">
            <input type="checkbox" checked={isDone}/>
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button>삭제</button>
        </div>
    )
}
export default TodoItem;