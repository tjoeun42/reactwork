import { useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

// 배열로 정보를 보여주면 삭제시 다른 정보를 보여줄수도 있음.
// id를 찾아서 그 정보를 보여주는것이 오류를 줄일 수 있음.
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
        </div>
        
    )
}
export default Detail;