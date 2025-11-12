// import mainBg from './img/bgimg.jpg';
import { useState } from 'react';
import './App.css';
import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import pList from './data/ProductList';

function App() {
  // src/data/ProductList.js 파일 만들기
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

      {/* <img src={mainBg} className='main-bg' /> */}
      <div className='main-bg' />

      <Container>
        <Row>
         {/*    1. 가로로 3개 넣기 
          <Col>
            <img src={process.env.PUBLIC_URL + "/img/clothes1.png"} width="80%"/>
            <h4>{clothes[0].title}</h4>
            <p>{clothes[0].price}</p>
          </Col>
          <Col>
            <img src={process.env.PUBLIC_URL + "/img/clothes2.png"} width="80%"/>
            <h4>{clothes[1].title}</h4>
            <p>{clothes[1].price}</p>
          </Col>
          <Col>
            <img src={process.env.PUBLIC_URL + "/img/clothes3.png"} width="80%"/>
            <h4>{clothes[2].title}</h4>
            <p>{clothes[2].price}</p>
          </Col> */}

          {/* 2. map으로 간단하게 */}
          {/* 
          {
            clothes.map((item, i) => (
              <Col>
                <img src={`${process.env.PUBLIC_URL}/img/clothes${i+1}.png`} width="80%"/>
                <h4>{item.title}</h4>
                <p>{item.price}</p>
              </Col>
            ))
          }
          */}

          {/* 3. 별도의 컴포넌트를 만들어서 사용 */}
          {
            clothes.map((item, i) => {
              return(
                <PListCol clothes={item} key={i}/>
              )
            })
          }
        </Row>
      </Container>
    </div>
  );
}

// 별도의 컴포넌트로
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
