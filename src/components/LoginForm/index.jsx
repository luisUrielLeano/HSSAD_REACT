import React, { useState, lazy } from 'react';
import { Form, Input, Row, Col, Alert } from 'antd';

import HSSADAPI from '../../apis/HSSADApi';

import * as S from './styles';

const Button = lazy(() => import('../../common/Button'));

const LoginForm = () => {
    const [ username, setUsername ] = useState();
    const [ password, setPassword ] = useState();
    const [ error, setError ] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await HSSADAPI.post('/auth',{
                username,
                password
            });
            setError(null);
            console.log(response.data);
        }catch( err ){
            setError(err.response.data);
        }
    };

    const handleUsernameChange = (e) => { 
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const errorAlert = error ? 
    <Row>
        <Col span='8'></Col>
        <Col span='8'>
            <Alert message= { `Auth failed: ${ error } `} type='error' banner  />
        </Col>
    </Row> : ' '

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8},
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16},
    };

    return (
        <Form
            {...layout}
            onSubmit={handleSubmit}
        >
            <Row>
                <Col span='8'></Col>
                <Col span='8' align='middle'>
                    <S.LoginTitle>ADMIN LOGIN</S.LoginTitle>
                </Col>
            </Row>
            <Form.Item
                label='Username'
                name='username'
                value={ username }
                onChange={ handleUsernameChange }
                rules={ [{ required: true, message: 'Please input your username' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label='Password'
                name='password'
                value={ password }
                onChange={ handlePasswordChange }
                rules={ [{ required: true, message: 'Please input your password' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button color={'#0000CC'} onClick={handleSubmit} disabled={!(password && username)}>
                    Login
                </Button>
            </Form.Item>
            { errorAlert }
        </Form>
    );
};

export default LoginForm;