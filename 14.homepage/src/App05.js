import { useState } from 'react';
import './App.css';
import {Container, Nav, Navbar, Row, Col, Button} from 'react-bootstrap';
import pList from './data/ProductList';
import { Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';
import axios from 'axios';

// ajax 사용하기
// 설치하기 : npm install axios
function App() {
  const [clothes, setClothes] = useState(pList);
  const [clickCount, setClickCount] = useState(2);
  let navigate = useNavigate();

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
                      // 성공 핸들링
                      console.log(result);
                      console.log(result.data);
                      let copy = [...clothes, ...result.data]
                      setClothes(copy)
                      setClickCount(clickCount+1);
                    })
                    .catch(() => {
                      // 에러 핸들링
                      console.log("axios 실패");
                      alert('더이상 상품이 없습니다');
                    });
            }}>서버에서 데이터 가져오기</Button>
          </>
        } />
        <Route path="/detail/:pid" element={<Detail clothes={clothes}/>} />
        <Route path="/cart" element={<div>장바구니임</div>}/>
        <Route path="*" element={<div>없는 페이지 입니다</div>} />
      </Routes>
    </div>
  );
}

// 클릭하면 상세페이지로 이동
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