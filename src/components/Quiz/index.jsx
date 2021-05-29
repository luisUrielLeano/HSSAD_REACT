import React, { useState, useEffect } from 'react';
import { Progress } from 'antd';
import { animateScroll as scroll } from 'react-scroll';

import HSSADAPI from '../../apis/HSSADApi';

import * as S from './styles';
import Question from './Question';
import Button from '../../common/Button';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [sectionCount, setSectionCount] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [count, setCount] = useState(0);


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

    const scrollToTop = () =>{
        scroll.scrollToTop();
    }

    const handleSelectedAnswer = ( value ) => {
        setAnswers( arr => [...arr, value]);
        setCurrentQuestion(currentQuestion+1);
        setCount(count+1);
    
    };

    const handleNextSection = () =>{
        scrollToTop();
        setCount(0);
        setSectionCount(sectionCount+5);
    }

    const handleFinish = () => {
        console.log('Quiz finished');
    }
    
    let sampleQuestions = questions.slice(sectionCount,sectionCount+5);
    let isCompleted = answers.length===20 ? true : false;
    return (
        <S.QuestionsWrapper>
            <Progress percent={ 5 * currentQuestion }/>
            { sampleQuestions.map((question, index) => (
                <Question
                    key= { index }
                    qNumber = { question.qNumber }
                    description = { question.description }
                    handleSelectedAnswer = { handleSelectedAnswer }
                    isActive = { currentQuestion===question.qNumber-1 ? true: false }
                    isDisabled = { currentQuestion===question.qNumber-1 ? false: true }
                />
            ))}
            { !isCompleted && count===5 && <Button onClick={ handleNextSection }color={'#0000CC'}>Next</Button> }
            { isCompleted && count===5 && <Button onClick={ handleFinish }color={'#0000CC'}>Finish</Button> }
        </S.QuestionsWrapper>
    );
};

export default Quiz;