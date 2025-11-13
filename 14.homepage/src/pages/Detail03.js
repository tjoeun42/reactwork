import { Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Detail(props) {
    /*
    let {pid, member} = useParams();

    console.log(`pid : ${pid}`);
    console.log(`member : ${member}`);
    console.log(typeof(pid));
    */
    let {pid} = useParams();
    return (
        <div className="detail">
            <Container>
                <Row>
                    <Col>
                        <img src={`${process.env.PUBLIC_URL}/img/clothes${pid}.png`} width="80%"/>
                    </Col>
                    <Col>
                        <h4>{props.clothes[pid-1].title}</h4>
                        <p>{props.clothes[pid-1].content}</p>
                        <p>{props.clothes[pid-1].price}원</p>
                        <Button variant="info">주문하기</Button>
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}
export default Detail;