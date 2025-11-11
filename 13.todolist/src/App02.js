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

function App() {
  const [todos, setTodos] = useState(tmpData);

  // id를 기존 데이터의 id번호 다음 번호로 세팅하기
  /*
    useRef() : React Hook 중 하나
               컴포넌트가 리렌더링되더라도 값이 유지되는 컨테이너 역할을 함
  */
  const idRef = useRef(3);    // id가 0~2번까지 있어서 3번 부터 시작
  const onCreate = (content) => {
    const newItem = {
      id : idRef.current++,
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
