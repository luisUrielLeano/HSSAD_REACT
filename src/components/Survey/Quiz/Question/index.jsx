import React from 'react';

import * as S from './styles';
import AnswerGroup from '../AnswerGroup';

const Question = ({ qNumber, description, handleSelectedAnswer, isActive, isDisabled, positive }) => {

    return (
    <S.Question id={`q${qNumber}`}key={qNumber} active = {  isActive }>
        <S.Statement>
            { qNumber + ' ' + description }
        </S.Statement>
        <AnswerGroup handleSelectedAnswer={ handleSelectedAnswer } isDisabled={ isDisabled } positive={ positive }/>
    </S.Question>
    );
};

export default Question;