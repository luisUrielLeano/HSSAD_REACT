import { useState, Fragment, lazy } from 'react';
import { Row, Col, Drawer } from 'antd';
import { CSSTransition } from 'react-transition-group';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

const SvgIcon = lazy(() => import('../../common/SvgIcon'));
const Button = lazy(() => import('../../common/Button'));

const Header = () => {
    const [isNavVisible] = useState(false);
    const [isSmallScreen] = useState(false);
    const [visible, setVisibility] = useState(false);
    const history =  useHistory();

    const showDrawer = () => {
        setVisibility(!visible);
    }

    const onClose = () => {
        setVisibility(!visible);
    }

    const MenuItem = () => {
        return (
            <Fragment>
                <S.CustomNavLinkSmall>
                    <S.Span>About</S.Span>
                </S.CustomNavLinkSmall>
                <S.CustomNavLinkSmall
                    style={{ width: '180px' }}
                >
                    <S.Span>
                        <Button color={'#0000CC'} onClick={ () => { history.push('/login')}}>Admin Login</Button>
                    </S.Span>
                </S.CustomNavLinkSmall>
            </Fragment>
        );
    }

    return (
        <S.Header>
            <S.Container>
                <Row type='flex' justify='space-between' gutter={ 10 }>
                    <S.LogoContainer to='/' aria-label='logo'>
                        <SvgIcon src='logo.svg' width='90rem' height='90rem' />
                    </S.LogoContainer>
                    <S.NotHidden>
                        <MenuItem />
                    </S.NotHidden>
                    <S.Burger onClick={ showDrawer }>
                        <S.Outline />
                    </S.Burger>
                </Row>
                <CSSTransition
                    in={ !isSmallScreen || isNavVisible }
                    timeout={ 350 }
                    classNames="NavAnimation"
                    unmountOnExit
                >
                    <Drawer closable={false} visible={ visible } onClose={ onClose }>
                        <Col style={{ maginBottom: '2.5rem' }}>
                            <S.Label onClick={ onClose }>
                                <Col span={ 12 }>
                                    <S.Menu>Menu</S.Menu>
                                </Col>
                                <Col span={ 12 }>
                                    <S.Outline padding="true" />
                                </Col>
                            </S.Label>
                        </Col>
                    <MenuItem/>
                    </Drawer>
                </CSSTransition>
            </S.Container>
        </S.Header>
    );
}
export default Header;