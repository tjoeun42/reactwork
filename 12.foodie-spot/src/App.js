import './App.css';
import {useState} from 'react';

/*
  삭제하기
*/
function App() {
  const [like, setLike] = useState([0,0,0]);
  let [title, setTitle] = useState(['얌샘김밥', '이향', '초밥']);
  let [modal, setModal] = useState(false);
  let [modalIndex, setModalIndex] = useState(0);

  let [inputValue, setInputValue] = useState('');

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
                          }}>🥇</span>{like[i]}
              <button className="delete" onClick={() => {
                let copyTitle = [...title];
                copyTitle.splice(i, 1);
                setTitle(copyTitle);
                
                let copyLike = [...like];
                copyLike.splice(i, 1);
                setLike(copyLike);
              }}>삭제</button>
              </p>
            </div>
          )
        }) 
      }
      <input onChange={(e)=>{setInputValue(e.target.value); /*console.log(inputValue)*/}}></input>
      <button onClick={() => {
        let ctitle = [...title];
        let clike = [...like];
        ctitle.unshift(inputValue);
        clike.unshift(0)
        setTitle(ctitle);
        setLike(clike);
      }}>글추가</button>

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