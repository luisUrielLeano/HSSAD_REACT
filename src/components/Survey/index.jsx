import React, {useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col } from 'antd';
import {
    ArrowLeftOutlined
} from '@ant-design/icons';

import Quiz from '../Survey/Quiz';
import SurveyForm from './SurveyForm';
import HSSADAPI from '../../apis/HSSADApi';
import ResultModal from './ResultModal';

const Survey = () => {

    const history = useHistory();
    //Little hack using useReducer to be able to update 2 or more states at the same time!
    const [state, setState] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {data: null, showQuiz: false, isModalVisible: false, prediction: null}
    );

    const showModal = () => {
        setState({isModalVisible: true});
    };

    const handleOk = () => {
        history.replace('/');       
        setState({isModalVisible: false});
        
    };
    
    const sendData = async (data) => {
        try{
            const response = await HSSADAPI.post('/survey', data);
            setState({prediction: response.data.prediction});
        } catch(err){
            console.log(err);
        }
    }
    const completeSurvey = (data) =>{
        setState({data: data});
        setState({showQuiz: true});
    };

    const completeQuiz = (answers) => {
        sendData({...state.data, answers});
        showModal();
    };

    const handleBackButton = () => {
        history.replace('/');
    };

    return (
        <> 
            <Row gutter={24} type='flex'>
                <Col span={5}/>
                <Col span={8}>
                    <ArrowLeftOutlined onClick = { handleBackButton } style={{ fontSize: '150%', paddingTop: '5rem'}}/>
                </Col>
            </Row>
            { !state.showQuiz ? <SurveyForm completeSurvey={ completeSurvey }/> : <Quiz completeQuiz={ completeQuiz }/>}
            <ResultModal isModalVisible={state.isModalVisible} prediction={state.prediction} handleOk={handleOk} />
        </>
    );
};

export default Survey;