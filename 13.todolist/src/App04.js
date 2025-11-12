import './App.css';
import Header from './component/Header';
import Editor from './component/Editor';
import List from './component/List';
import { useState, useRef } from 'react';

const tmpData = [
  {
    id : 0,
    isDone : false,   // 체크박스
    content : "React 공부하기",
    date : new Date().getTime(),
  },
  {
    id : 1,
    isDone : false,
    content : "꿀맛같은 휴식",
    date : new Date().getTime(),
  },
  {
    id : 2,
    isDone : false, 
    content : "친구와 채팅하기",
    date : new Date().getTime(),
  }
];
// 체크박스가 체크가 되게 하기
//  isDone의 값이 true로 변경되야 함

function App() {
  const [todos, setTodos] = useState(tmpData);

  const idRef = useRef(3);
  const onCreate = (content) => {
    const newItem = {
      id : idRef.current++,
      isDone : false,
      content : content,
      date : new Date().getTime(),
    }
    setTodos([newItem, ...todos]);
  }

  const onUpdate = (targetId) => {
    /*
    setTodos(todos.map( todo => {
      if(todo.id === targetId) {
        return {
          ...todo,
          isDone : !todo.isDone
        }
      }
      return todo
    }))
    */
   
    // 삼항 연산자로 바꾸면
    setTodos(todos.map(todo => todo.id === targetId ? {...todo, isDone : !todo.isDone} : todo))
  }

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate}/>
    </div>
  );
}

export default App;