import './App.css';
import {useState} from 'react';
/*
  버튼을 모달창에서 사용
*/
function App() {
  const [like, setLike] = useState([0,0,0]);
  let [title, setTitle] = useState(['얌샘김밥', '이향', '초밥']);
  let [modal, setModal] = useState(false);
  let [modalIndex, setModalIndex] = useState(0);

  return (
    <div className="App">
      <h2>FOODIE SPOT</h2>

      

      { 
        title.map((v, i) => {
          return (
            <div className="list" key={i}>
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
      { modal ? <Modal title={title} modalIndex={modalIndex} setTitle={setTitle} /> : null }  
    </div>
  );
}
function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.title[props.modalIndex]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copy = [...props.title];
        copy[props.modalIndex] = '김밥천국';
        props.setTitle(copy);
      }}>글수정</button>
    </div>
  )
}

export default App;