import { Button } from 'react-bootstrap';

function Detail() {
    return (
        <div className="detail">
            <div className="detail_img">
                <img src={process.env.PUBLIC_URL + "/img/clothes1.png"} width="80%"/>
            </div>
            <div className="detail_text">
                <h4>상품명</h4>
                <p>상품설명</p>
                <p>30000원</p>
                <Button variant="info">주문하기</Button>
            </div>
        </div>
    )
}
export default Detail;