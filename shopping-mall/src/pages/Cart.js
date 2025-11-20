import {Table} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Cart() {
    const [list, setList] = useState([]);

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('loginUser'));

        if(!user) {
            console.log('로그인 후 사용');
            return;
        }

        axios.get('/react/getCart', {params:{memId: user.email}})
             .then(result => {
                setList(result.data);
             })
             .catch(() => {
                console.log("실패");
             })
    }, []);

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
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(c =>
                            <tr>
                                <td>{c.id}</td>
                                <td>{c.title}</td>
                                <td>{c.count}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default Cart;