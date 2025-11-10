import './App.css';
import Compo from './component/Compo.js';
/*
  * props
    부모가 자식 컴포넌트에게 전달하는 데이터
    자식컴포넌트는 값변경 불가
    자식이 부모에게 값 넘겨주는것 : 불가
    형제끼리도 값 넘겨주는거 것 : 불
*/

/*  1. string 값 넘겨주기
function App() {
  const address = "서울 강남구 한국빌딩";
  return (
    <div className="App">
      <Compo user={"tjoeun"} addr={address} />
    </div>
  );
}
*/

/*
// 2. 객체 형태 넘겨주기
function App() {
  const userInfo = {
    name : '이미영',
    addr : '경기도 시흥시',
    likeList : ['캐릭터','만화','웹툰']
  }
  return (
    <div className="App">
      {/* 2.1 <Compo useri={userInfo} > 
      {/* 2.2. 풀어서 넘겨주기
      <Compo {...userInfo} />
    </div>
  );
}
*/

function App() {
  return <Compo />
}
export default App;
