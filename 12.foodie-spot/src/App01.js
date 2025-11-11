import './App.css';
import {useState} from 'react';

function App() {
  const [like, setLike] = useState(0);
  let [title, setTitle] = useState(['얌샘김밥', '이향', '초밥']);

  return (
    <div className="App">
      <h2>FOODIE SPOT</h2>
      
      {/*  배열의 주소가 복사되어 주소는 바뀌지 않음. 그러므로 리렌더링이 안됨
      <button onClick={()=>{
        let copy = title;
        copy[0] = '김밥천국';
        setTitle(copy);
      }}>글수정</button>
      */}

      <button onClick={() => {
        let copy = [...title];
        copy[0] = '김밥천국';
        setTitle(copy);
      }}>글수정</button>
      
      <div className="list">
          <h4>{title[0]}</h4>
          <p>11월 10일 &emsp;<span onClick={() => {setLike(like+1)}}>🥇</span>&emsp;{like} </p>
      </div>
      <div className="list">
          <h4>{title[1]}</h4>
          <p>11월 10일 &emsp;<span>🥇</span>&emsp;</p>
      </div>
      <div className="list">
          <h4>{title[2]}</h4>
          <p>11월 10일 &emsp;<span>🥇</span>&emsp;</p>
      </div>
    </div>
  );
}

export default App;