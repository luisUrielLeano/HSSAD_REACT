import React, {useState } from 'react';

import Quiz from '../Survey/Quiz';
import SurveyForm from './SurveyForm';
import HSSADAPI from '../../apis/HSSADApi';

const Survey = () => {
    const [data, setData] = useState();
    const [showQuiz, setShowQuiz] = useState(false);
    
    const sendData = async (data) => {
        try{
            const response = await HSSADAPI.post('/survey', data);
            console.log("respuesta"+response);
        } catch(err){
            console.log(err);
        }
    }
    const completeSurvey = (data) =>{
        setData(data);
        setShowQuiz(true);
    };

    const completeQuiz = (answers) => {
        sendData({...data, answers});
        setData({...data, answers});
    };

    return (
        <>  
            { console.log(data) }
            { !showQuiz ? <SurveyForm completeSurvey={ completeSurvey }/> : <Quiz completeQuiz={ completeQuiz }/>}
        </>
    );
};

export default Survey;