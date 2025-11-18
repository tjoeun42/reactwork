import axios from 'axios';
import { useState } from 'react';
import {Col, Form, Row, Button} from 'react-bootstrap';

const Signup = () => {
    const [form, setForm] = useState({
        email : '',
        password : '',
        name : '',
        birthday : '',
        gender : '',
        phone : '',
        address : '',
        detailAddress : ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name] : value
        })
        if(name == 'email') {
            setEmailCheckMessage('');
            setIsEmailChecked(false);
        }
    }
    const [emailCheckMessage, setEmailCheckMessage] = useState('');
    const [isEmailChecked, setIsEmailChecked] = useState('false');
    const checkEmail = () => {
        axios.get('/react/email-check', {params: {email:form.email}})
             .then(result => {
                if(result.data) {
                    setEmailCheckMessage('사용 가능한 이메일 입니다.');
                    setIsEmailChecked(true);
                } else {
                    setEmailCheckMessage('이미 사용 중인 이메일 입니다.');
                    setIsEmailChecked(false);
                }
             })
             .catch(() => {
                alert('이메일 확인 중 오류가 발생했습니다.');
             })
    }
    return (
        <div style={style.container}>
            <h2 style={style.title}>회원가입</h2>
            <Form style={style.form}>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">EMAIL</Form.Label>
                    <Col sm="8">
                        <Form.Control type="email" name="email" onChange={handleChange} required />
                    </Col>
                    <Col sm="2">
                        <Button onClick={checkEmail}>중복확인</Button>
                    </Col>
                    {
                        emailCheckMessage && (
                            <span style={{color: isEmailChecked ? 'green' : 'red', fontSize:'0.8em', marginTop:'5px'}}>
                                {emailCheckMessage}
                            </span>
                        )
                    }
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">PASSWORD</Form.Label>
                    <Col sm="10">
                    <Form.Control type="password" name="password" required/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">NAME</Form.Label>
                    <Col sm="10">
                    <Form.Control name="name" required/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">BIRTHDAY</Form.Label>
                    <Col sm="10">
                    <Form.Control type="date" name="birthday" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">GENDER</Form.Label>
                    <Col sm="10">
                    <Form.Select name="gender">
                            <option>성별 선택</option>
                            <option value="M">남성</option>
                            <option value="F">여성</option>
                    </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">PHONE</Form.Label>
                    <Col sm="10">
                    <Form.Control name="phone" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">ADDRESS</Form.Label>
                    <Col sm="8">
                    <Form.Control name="address" readOnly />
                    </Col>
                    <Col sm="2">
                    <Button >주소 검색</Button>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">DETAIL ADDRESS</Form.Label>
                    <Col sm="10">
                    <Form.Control name="detailAddress" />
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

const style = {
    container : {
        textAlign : 'center',
        marginTop : '40px',
    },
    title : {
        textAlign: 'center',
        marginBottom : '20px'
    },
    form : {
        margin: '0 auto',
        width : '80%'
    }
}

export default Signup;