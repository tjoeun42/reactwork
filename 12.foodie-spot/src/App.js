import './App.css';
import {useState} from 'react';

function App() {
  const [like, setLike] = useState(0);

  return (
    <div className="App">
      <h2>FOODIE SPOT</h2>
      <div className="list">
          <h4>얌샘김밥</h4>
          <p>11월 10일 <span onClick={() => {setLike(like+1)}}>🥇</span> {like} </p>
      </div>
      <div className="list">
          <h4>이향</h4>
          <p>11월 10일 <span>🥇</span></p>
      </div>
      <div className="list">
          <h4>초밥</h4>
          <p>11월 10일 <span>🥇</span></p>
      </div>
    </div>
  );
}

export default App;
