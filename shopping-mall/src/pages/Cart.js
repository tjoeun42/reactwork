import {Table, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { countIncrease } from '../store/store';

function Cart() {
    let result = useSelector(result => result);
    let stock = useSelector(result => result.stock)

    let dispatch = useDispatch()

    return (
        <div className='cart'>
            <br/>
            <h2>CART LIST</h2>
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
                    {
                        result.cart.map(c =>
                            <tr>
                                <td>{c.id}</td>
                                <td>{c.name}</td>
                                <td>{c.count}</td>
                                <td><Button variant="info" onClick={() => {dispatch(countIncrease(c.id))}}>+</Button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default Cart;