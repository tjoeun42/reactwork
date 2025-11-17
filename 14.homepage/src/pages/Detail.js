import { useEffect, useState } from 'react';
import { Button, Container, Row, Col, Nav } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/store';

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
    /*
    useEffect(() => {
        let p = localStorage.getItem('recentProduct');  // json반환
        p = JSON.parse(p)    // JSON을 객체로 변환
        p.push(findId.id)   // 객체에서 사용하는 함수
        localStorage.setItem('recentProduct', JSON.stringify(p))
    }, [])
    // 이렇게하면 같은 id가 중복하여 저장될 수 있음
    */
    useEffect(() => {
        let p = localStorage.getItem('recentProduct');
        p = JSON.parse(p)
        /*  if문으로 중복 제거
        if(!p.includes(findId.id)) {
            p.push(findId.id)
            localStorage.setItem('recentProduct', JSON.stringify(p))
        }
        */
        // Set으로 중복제거
        p.push(findId.id)
        p = new Set(p)
        p = Array.from(p)
        localStorage.setItem('recentProduct', JSON.stringify(p))
    }, [])

    let [tab, setTab] = useState(0);

    const [fade2, setFade2] = useState('start');

    useEffect(() => {
        setFade2(' end');
    }, [])

    let dispatch = useDispatch()
    const navigate = useNavigate();

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
                        <Button variant="info" onClick={()=>{
                            dispatch(addItem({id:findId.id, name:findId.title, count:1}));
                            navigate('/Cart');
                        }}>주문하기</Button>
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
            <RecentViewed clothes={props.clothes} />
        </div>  
    )
}

function RecentViewed({clothes}) {
    const [recent, setRecent] = useState([]);

    useEffect(() => {
        let rp = JSON.parse(localStorage.getItem('recentProduct')) || [];
        rp = rp.slice().reverse();
        let products = rp.map(id => clothes.find(c => c.id == id))
                         .filter(Boolean)
        setRecent(products)
    }, [clothes])

    return (
        <div>
            <h4>⚆_⚆ 최근 본 상품</h4>
            <div style={{display:'flex'}}>
                {
                    recent.map(item => (
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/img/clothes${item.id}.png`} style={{width: '40%'}}/>
                            <div>
                                <strong>{item.title}</strong>
                                <p>{item.price}원</p>
                            </div>
                        </div>
                    ))
                }
            </div>
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