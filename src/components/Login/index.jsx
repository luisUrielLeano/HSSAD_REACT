import { Fade } from 'react-awesome-reveal';
import { Row, Col} from 'antd';

import LoginForm from '../LoginForm/';
import SvgIcon from '../../common/SvgIcon';

import * as S from './styles';

const Login = () => {
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
                <LoginForm/>
            </S.Login>
        </Fade >
    );
}

export default Login;