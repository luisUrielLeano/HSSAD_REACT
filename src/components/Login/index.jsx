import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { Row, Col, Alert} from 'antd';

import { AuthContext } from '../../context/AuthContext';
import HSSADAPI from '../../apis/HSSADApi';

import LoginForm from '../LoginForm/';
import SvgIcon from '../../common/SvgIcon';

import * as S from './styles';

const Login = () => {
    const history = useHistory();
    const { dispatch } = useContext(AuthContext);
    const [ error, setError ] = useState();

    const errorAlert = error ? 
    <Row>
        <Col span='8'></Col>
        <Col span='8'>
            <Alert message= { `Auth failed: ${ error } `} type='error' banner  />
        </Col>
    </Row> : ' '

    const signIn = async (username, password) =>{
        try{
            const response = await HSSADAPI.post('/auth', {
                username,
                password
            });
            const data = response.data;
            dispatch({ type: 'SIGN_IN', data: data });
            history.replace('/adminPage');
        }catch( err ){
            setError(err.response.data);
        }
    }
    return (
        <Fade Bottom>
            <S.Logo>
                <Row>
                    <Col span='8'></Col>
                    <Col span='8' align='middle'>
                        <SvgIcon src='logo.svg' width='150rem' height='150rem' />
                    </Col>
                </Row> 
            </S.Logo>
            <S.Login>
                <LoginForm signIn={ signIn }/>
                { errorAlert }
            </S.Login>
        </Fade >
    );
}

export default Login;