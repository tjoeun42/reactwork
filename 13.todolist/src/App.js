import './App.css';
import Header from './component/Header';
import Editor from './component/Editor';
import List from './component/List';
import { useState } from 'react';

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

function App() {
  const [todos, setTodos] = useState(tmpData);

  const onCreate = (content) => {
    const newItem = {
      id : 0,
      isDone : false,
      content : content,
      date : new Date().getTime(),
    }
    setTodos([newItem, ...todos]);
  }

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List />
    </div>
  );
}

export default App;
