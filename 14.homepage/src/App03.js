import { useState } from 'react';
import './App.css';
import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import pList from './data/ProductList';
import { Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';

function App() {
  const [clothes, setClothes] = useState(pList);
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
          </>
        } />

        {/*         
        * url파라이터 사용
          localhost:3000/detail/1   ->  받을 때 useParams()  : 주고 고정적인것 사용시

          localhost:3000/detail?search=knit  -> 받을 때 useSearchParams()  : 변하는 값 사용시
            let [params, SetParams] = useSearchParams()
            params.get('search')

          <Route path="/detail/:마음대로" element={<Detail clothes={clothes}/>} />
       */}

        <Route path="/detail/:pid" element={<Detail clothes={clothes}/>} />
        
        {/* 값을 여러개 넘겨줄때 */}
        {/* <Route path="/detail/:pid/:member" element={<Detail clothes={clothes}/>} /> */}
        <Route path="/cart" element={<div>장바구니임</div>}/>
        <Route path="*" element={<div>없는 페이지 입니다</div>} />
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
