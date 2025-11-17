import {Table, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeAge, changeName } from '../store/store';

function Cart() {
    let result = useSelector(result => result);
    let stock = useSelector(result => result.stock)
    let dispatch = useDispatch()

    return (
        <div className='cart'>
            <br/>
            <h2>{result.user.name}의 CART LIST</h2>
            <br/>
            <Button variant="info" onClick={() => {dispatch(changeName())}}>이름 바꾸기</Button>

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
                    {
                        result.cart.map(c =>
                            <tr>
                                <td>{c.id}</td>
                                <td>{c.name}</td>
                                <td>{c.count}</td>
                                <td><Button variant="info" onClick={() => {dispatch(changeAge(5))}}>나이변경</Button></td>
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