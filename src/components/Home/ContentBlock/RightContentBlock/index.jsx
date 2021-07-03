import { Row, Col } from 'antd';
import Slide from 'react-awesome-reveal';
import { useHistory } from 'react-router-dom';

import SvgIcon from '../../../../common/SvgIcon';
import Button from '../../../../common/Button';

import * as S from './styles';

const RightBlock = ( { title, content, button, icon, t, id}) => {
    const history = useHistory();

    const handleTakeQuiz = () => {
        history.replace('/survey');
    };
    
    return (
        <S.RightBlockContainer>
            <Row type='flex' justify='space-between' align='middle' id={ id }>
                <Col lg={ 11 } md={ 11 } sm={ 11 } xs={ 24 }>
                    <Slide left>
                        <S.ContentWrapper>
                            <h6>{ title }</h6>
                            <S.Content>{ content }</S.Content>
                            <S.ButtonWrapper>
                                <Button
                                    key='quizButton'
                                    color='#0000CC'
                                    width="true"
                                    onClick={ handleTakeQuiz }
                                    >
                                        Contestar Encuesta
                                </Button>
                            </S.ButtonWrapper>
                        </S.ContentWrapper>
                    </Slide>
                </Col>
                <Col lg={ 11 } md={ 11 } sm={ 12 } xs={ 24 }>
                    <Slide right>
                        <SvgIcon
                            src={ icon }
                            className='about-block-image'
                            width='100%'
                            height='100%'
                        />
                    </Slide>
                </Col>
            </Row>
        </S.RightBlockContainer>
    );
};

export default RightBlock;