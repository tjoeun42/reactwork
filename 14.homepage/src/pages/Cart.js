import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

function Cart() {
    // store에 있는 모든것 가져오기
    let result = useSelector(result => result);
    console.log(result);
    console.log(result.user);
    console.log(result.stock);

    // store에서 원하는것만 가져오기
    let stock = useSelector(result => result.stock)
    console.log(stock);

    return (
        <div>
            <br/>
            <h2>{result.user}의 CART LIST</h2>
            <br/>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>{stock[0]}</td>
                        <td>버튼</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default Cart;

/*

[
    {id:1, name:'jacket', count:1}
    {id:3, name:'knit', count:2}
]
장바구니에 위의 상품을 담았다
store.js에서 넣어주고
Cart.js 테이블에서 보여주기
*/