import React, { useState, useEffect } from 'react';
import { Radio } from 'antd';

import HSSADAPI from '../../apis/HSSADApi';

import * as S from './styles';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        getQuestions();
    }, []);

    const getQuestions = async () => {
        try {
            const response = await HSSADAPI.get('/quiz');
            setQuestions(response.data);
        } catch ( err ){
            console.log(err);
        }
    }
    return (
        <S.QuestionsWrapper>
            { questions.map((question, index) => (
                <S.Question key={question.qNumber}>
                    <S.Statement>
                        {question.description}
                    </S.Statement>
                    <Radio.Group style={{paddingTop: '1.5rem'}}>
                    <Radio>Nunca</Radio>
                    <Radio>A veces</Radio>
                    <Radio>Casi siempre</Radio>
                    <Radio>Siempre</Radio>
                </Radio.Group>
                </S.Question>
            )) }
        </S.QuestionsWrapper>
    );
};

export default Quiz;