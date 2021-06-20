import React, { useState, lazy } from 'react';
import { Form, Input, Row, Col } from 'antd';

import * as S from './styles';

const Button = lazy(() => import('../../../common/Button'));

const LoginForm = ( { signIn }) => {
    const [ username, setUsername ] = useState();
    const [ password, setPassword ] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(username, password);
    }

    const handleUsernameChange = (e) => { 
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

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
        </Form>
    );
};

export default LoginForm;