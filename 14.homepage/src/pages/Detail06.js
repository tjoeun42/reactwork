import { useEffect, useState } from 'react';
import { Button, Container, Row, Col, Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Detail(props) {
    let {pid} = useParams();

    let findId = props.clothes.find(item => 
       item.id == pid
    )

    let [alert, setAlert] = useState(true);
    useEffect(() => {
        let timer = setTimeout(() => { setAlert(false)}, 2000);
        return() => {
            clearTimeout(timer);
        }
    })

    let [tab, setTab] = useState(0);

    return (
        <div className="detail">
            {
                alert == true ? <div>2초이내 구매시 할인</div> : null
            }
            <Container>
                <Row>
                    <Col>
                        <img src={`${process.env.PUBLIC_URL}/img/clothes${findId.id}.png`} width="80%"/>
                    </Col>
                    <Col>
                        <h4>{findId.title}</h4>
                        <p>{findId.content}</p>
                        <p>{findId.price}원</p>
                        <Button variant="info">주문하기</Button>
                    </Col>
                </Row>
            </Container>

            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(0)}}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(1)}}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(2)}}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            {/* 
            tab == 0 이면 <div>내용0</div> 보이기
            tab == 1 이면 <div>내용1</div> 보이기
            tab == 2 이면 <div>내용2</div> 보이기 
            */}
            {/* 삼항 연산자로 */}
            {/* { tab == 0 ? <div>내용0</div> : tab == 1 ? <div>내용1</div> : <div>내용2</div> }   */}

            <TabContent tab={tab}/>
        </div>  
    )
}

/*
// if문으로 (컴포넌트에)
function TabContent({tab}) {
    if(tab == 0) {
        return <div>내용0</div>  
    }
    if(tab == 1) {
        return <div>내용1</div>  
    }
    if(tab == 2) {
        return <div>내용2</div>  
    }
}
*/

// if문 없이 배열로
function TabContent({tab}) {
    return [<h1>내용0</h1>, <h1>내용1</h1>, <h1>내용2</h1>][tab];
}

export default Detail;