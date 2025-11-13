import { createContext, useState } from 'react';
import './App.css';
import {Container, Nav, Navbar, Row, Col, Button} from 'react-bootstrap';
import pList from './data/ProductList';
import { Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';
import axios from 'axios';
/*
  * single page 자료 공유의 단점
    - 컴포넌트간 state공유 어려움

  * 공유 데이터로 사용하고 싶으면(props를 사용 안함)
    1. Context API 문법
       잘 사용 안함 : 성능이슈(하나만 변해도 그 하위의 모든 자식들이 재렌더링이 됨)
                    재사용의 어려움
    2. Redux라는 외부 라이브러리
       주로 사용
*/
// 1. Context API 문법 사용

export let Context1 = createContext();   // Context API 생성

function App() {
  const [clothes, setClothes] = useState(pList);
  const [clickCount, setClickCount] = useState(2);
  let navigate = useNavigate();

  // 재고 state
  const [stock, setStock] = useState([5, 20, 7]);
  

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Fashion Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=> {navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=> {navigate('/cart')}}>Cart</Nav.Link>
          </Nav>
        </Container>

      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg' />
            <Container>
              <Row>
                {
                  clothes.map((item, i) => {
                    return(
                      <PListCol clothes={item} key={i}/>
                    )
                  })
                }
              </Row>
            </Container>
            <Button variant="success" onClick={() => {
              axios.get(`https://raw.githubusercontent.com/bliss42/myHome/refs/heads/main/react/data/data${clickCount}.json`)
                   .then(result => {
                      let copy = [...clothes, ...result.data]
                      setClothes(copy)
                      setClickCount(clickCount+1);
                    })
                    .catch(() => {
                      alert('더이상 상품이 없습니다');
                    });
            }}>서버에서 데이터 가져오기</Button>
          </>
        } />
        <Route path="/detail/:pid" element={
          <Context1.Provider value={{stock, clothes}}>
            <Detail clothes={clothes}/>
          </Context1.Provider>
          } />
        <Route path="/cart" element={<div>장바구니임</div>}/>
        <Route path="*" element={<div>없는 페이지 입니다</div>} />
      </Routes>
    </div>
  );
}

function PListCol(props) {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/detail/${props.clothes.id}`);
  };
  return (
    <>
      <Col md={4} onClick={goDetail} style={{cursor:'pointer'}}>
        <img src={`${process.env.PUBLIC_URL}/img/clothes${props.clothes.id}.png`} width="80%"/>
        <h4>{props.clothes.title}</h4>
        <p>{props.clothes.price}</p>
      </Col>
    </>
  )
}


export default App;