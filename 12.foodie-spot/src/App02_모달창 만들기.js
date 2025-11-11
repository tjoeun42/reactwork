import './App.css';
import {useState} from 'react';
/*
  * 동적 모달창 만들기
    1. UI 디자인 하기
    2. UI의 현재 상태를 state 저장해 놓기
    3. state에 따라 UI를 어떻게 보일지 조건문 등으로 작성
*/
function App() {
  const [like, setLike] = useState(0);
  let [title, setTitle] = useState(['얌샘김밥', '이향', '초밥']);
  let [modal, setModal] = useState(false);  // '닫힘'/'열림' or  0/1 or true/false

  return (
    <div className="App">
      <h2>FOODIE SPOT</h2>

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
        {/* <h4 onClick={() => {setModal(true)}}>{title[1]}</h4> */}
        <h4 onClick={() => {setModal(!modal)}}>{title[1]}</h4>
        <p>11월 10일 &emsp;<span>🥇</span>&emsp;</p>
      </div>
      
      <div className="list">
        <h4>{title[2]}</h4>
        <p>11월 10일 &emsp;<span>🥇</span>&emsp;</p>
      </div>

      { modal ? <Modal/> : null }  
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;