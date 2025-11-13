import { useEffect, useState } from 'react';
import { Button, Container, Row, Col, Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
/*
    전환 애니메이션 만들기
    css에서 애니메이션 className하나 만들고
    원할 때 className을 넣었다 빼면 애니메이션 기능
    css에서
        1) 애니메이션 동작 하기 전 스타일을 담을 className 만들기
        2) 애니메이션 동작 한 후 스타일을 담을 className 만들기
        3) transition 속성 추가
    파일에서
        4) 원할 때 className을 탈부착하면 됨
*/
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

    useEffect(() => {
        let end = setTimeout(() => {setFade('end')}, 100);
        return () => {
            clearTimeout(end);
            setFade('');
        }
    }, [tab])

    return (
        <div className={`start ${fade}`}>
            { [<h1>내용0</h1>, <h1>내용1</h1>, <h1>내용2</h1>][tab] }
        </div>
    )
}

export default Detail;