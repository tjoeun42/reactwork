import { useState } from 'react';
import './App.css';
import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import pList from './data/ProductList';
import { Route, Routes } from 'react-router-dom';

/*
  * 다른 페이지로 가기
    > 기존의 페이지
      1. html파일로 상세보기 페이지만들기
      2. /detail 로 접속하면 html파일을 보여줌
    > react에서 페이지 나누기
      1. 컴포넌트로 상세페이지 만들기
      2. /dateil로 접속하면 기존의 index.html파일을 모두 비운후 상세페이지를 보여줌(싱글페이지)

  * react-router-dom : 페이지를 교체시켜주는 api
    1. 설치 : npm i react-router-dom
    2. index.js 에 <BrowserRouter>태그로 감싸기
*/
function App() {
  const [clothes, setClothes] = useState(pList);
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Fashion Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
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
          </>
        } />
        <Route path="/detail" element={<div>상세페이지임</div>} />
        <Route path="/cart" element={<div>장바구니임</div>}/>
      </Routes>
    </div>
  );
}

function PListCol(props) {
  return (
    <>
      <Col>
        <img src={`${process.env.PUBLIC_URL}/img/clothes${props.clothes.id}.png`} width="80%"/>
        <h4>{props.clothes.title}</h4>
        <p>{props.clothes.price}</p>
      </Col>
    </>
  )
}
export default App;
