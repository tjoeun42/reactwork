import { useEffect, useState } from 'react';
import { Button, Container, Row, Col, Nav } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Detail(props) {
    let {pid} = useParams();
    let findId = props.clothes.find(item => item.id == pid)
    
    let [tab, setTab] = useState(0);
    const [fade2, setFade2] = useState('start');

    const navigate = useNavigate();
    let [alert, setAlert] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => { setAlert(false)}, 2000);
        return() => {
            clearTimeout(timer);
        }
    })

    useEffect(() => {
        let p = localStorage.getItem('recentProduct');
        p = JSON.parse(p)
        p.push(findId.id)
        p = new Set(p)
        p = Array.from(p)
        localStorage.setItem('recentProduct', JSON.stringify(p))
    }, [])

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
                        <Button variant="info" onClick={()=>{
                            const user = JSON.parse(sessionStorage.getItem('loginUser'));

                            if(!user) {
                                alert("로그인 후 사용가능합니다.");
                                navigate('/login');
                                return;
                            }
                            axios.post('http://localhost:8080/react/addCart', {
                                id:findId.id, 
                                title:findId.title, 
                                count:1,
                                memId : user.email 
                            })
                            .then(result => {
                            console.log(result);
                            navigate('/Cart');
                            })
                            .catch(error => {
                            console.log("실패", error);
                            })
                        }}>장바구니에 담기</Button>
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
                            <img src={`${process.env.PUBLIC_URL}/img/clothes${item.id}.png`} style={{width: '50%'}}/>
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