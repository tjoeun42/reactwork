import { useContext, useEffect, useState } from 'react';
import { Button, Container, Row, Col, Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Context1 } from '../App';
function Detail(props) {
    /*
    // useContext() : Context1를 해체해 준다.
    let a = useContext(Context1);
    console.log(a);
    console.log(a.stock);
    console.log(a.clothes);
    */

    // useContext()를 받으면 객체 분해 할당으로 받으면
    let {stock, clothes} = useContext(Context1);
    console.log(stock);
    console.log(clothes);

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

    const [fade2, setFade2] = useState('start');

    useEffect(() => {
        setFade2(' end');
    }, [])

    return (
        <div className={fade2}>
            {
                alert == true ? <div>2초이내 구매시 할인</div> : null
            }
            <Container>
                <Row className='gap'>
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
            <TabContent tab={tab}/>
        </div>  
    )
}

function TabContent({tab}) {
    const [fade, setFade] = useState('');

    let {stock} = useContext(Context1);

    useEffect(() => {
        let end = setTimeout(() => {setFade('end')}, 100);
        return () => {
            clearTimeout(end);
            setFade('');
        }
    }, [tab])

    return (
        <div className={`start ${fade}`}>
            { [<h1>{stock}</h1>, <h1>{stock[1]}</h1>, <h1>{stock[tab]}</h1>][tab] }
        </div>
    )
}

export default Detail;