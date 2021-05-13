import { Row, Col } from 'antd';
import Fade from 'react-awesome-reveal';

import * as S from './styles';

const MiddleBlock = ( { title, content, button }) => {
    return(
        <S.MiddleBlock>
            <Row type='flex' justify='center' align='middle'>
                <Fade bottom>
                    <S.ContentWrapper>
                        <Col lg={ 24 } md={ 24 } sm={ 24 } xs={ 24 }>
                            <h6>{ title }</h6>
                            <S.Content>{ content }</S.Content>
                        </Col>
                    </S.ContentWrapper>
                </Fade>
            </Row>
        </S.MiddleBlock>
    );
};

export default MiddleBlock;