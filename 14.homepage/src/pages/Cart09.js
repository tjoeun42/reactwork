import {Table, Button} from 'react-bootstrap';
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
        <div className='cart'>
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
{/*                     
                    <tr>
                        <td>{result.cart[0].id}</td>
                        <td>{result.cart[0].name}</td>
                        <td>{result.cart[0].count}</td>
                        <td>버튼</td>
                    </tr>
                    <tr>
                        <td>{result.cart[1].id}</td>
                        <td>{result.cart[1].name}</td>
                        <td>{result.cart[1].count}</td>
                        <td>버튼</td>
                    </tr>
                     */}
                    {
                        result.cart.map(c =>
                            <tr>
                                <td>{c.id}</td>
                                <td>{c.name}</td>
                                <td>{c.count}</td>
                                <td><Button variant="info">변경하기</Button></td>
                            </tr>
                        )
                    }
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