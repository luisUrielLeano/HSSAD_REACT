import React, {useState, useEffect, useContext} from 'react';
import { Card, Col, Row } from 'antd';

import { AuthContext } from '../../../context/AuthContext';
import HSSADAPI from '../../../apis/HSSADApi';
import PredictionPieChart from './PredictionPieChart/';
import EducationBarChart from './EducationBarChart';
import GenderPredictionChart from './GenderPredictionChart';

const Dashboard = () => {
    const { auth } = useContext(AuthContext);
    const [surveys, setSurveys] = useState([]);

    useEffect(() => {
        getSurveys();
    }, []);

    const getSurveys = async () => {
        try {
            const config = {
                headers: {
                    'Authorization': `Bearer ${auth.token}` 
                }
            };
            const response = await HSSADAPI.get('/survey',config);
            setSurveys(response.data);
        } catch ( err ){
            console.log(err);
        }
    };
    
    return(
        <>
            <Row gutter={24} type='flex'>
                <Col span={8}>
                    <Card title='Predicciones realizadas'>
                        <PredictionPieChart surveys={ surveys }/>
                    </Card>
                </Col>
                <Col span={14}>
                    <Card title='Nivel de educación de los encuestados'>
                        <EducationBarChart surveys={ surveys }/>
                    </Card>
                </Col>
            </Row>
            <br/>
            <Row gutter={24} type='flex'>
            <Col span={6}/>
            <Col span={12}>
                    <Card title='Género en cada tipo de predicción'>
                        <GenderPredictionChart surveys={ surveys }/>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Dashboard;