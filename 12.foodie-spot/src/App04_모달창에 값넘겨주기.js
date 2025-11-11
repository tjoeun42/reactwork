import './App.css';
import {useState} from 'react';
/*
  모달창을 띄울때 클릭한 제목 넘겨주기
*/
function App() {
  const [like, setLike] = useState([0,0,0]);
  let [title, setTitle] = useState(['얌샘김밥', '이향', '초밥']);
  let [modal, setModal] = useState(false);
  // 1. state로 index 상태 저장
  let [modalIndex, setModalIndex] = useState(0);   // 0,1,2

  return (
    <div className="App">
      <h2>FOODIE SPOT</h2>

      <button onClick={() => {
        let copy = [...title];
        copy[0] = '김밥천국';
        setTitle(copy);
      }}>글수정</button>

      { 
        title.map((v, i) => {
          return (
            <div className="list" key={i}>
              {/* 2. index번호 수정 */}
              <h4 onClick={() => {setModal(!modal); setModalIndex(i)}} className="title">{v}</h4>
              <p>11월 10일 <span onClick={() => {
                            let copy = [...like];
                            copy[i] = copy[i] + 1;
                            setLike(copy)
                          }}>🥇</span>{like[i]}</p>
            </div>
          )
        }) 
      }
      {/* 3. index넘겨주기 */}
      { modal ? <Modal title={title} modalIndex={modalIndex} /> : null }  
    </div>
  );
}

// 4. 받아서 사용
function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.title[props.modalIndex]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;