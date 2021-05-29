import React, { useState } from 'react';
import { Radio } from 'antd';

const AnswerGroup = ( { handleSelectedAnswer, isDisabled } ) => {

    const answerOptions = [{
        description: 'En ningún momento (menos de 1 día)',
        value: 0
    },
    {
        description: 'Un poco del tiempo (1-2 días)',
        value: 1
    },
    {
        description: 'Ocasionalmente (3-4 días)',
        value: 2
    },
    {
        description: 'La mayoría del tiempo (5-7 días)',
        value: 3
    }
    ];

    const [value, setValue] = useState();

    const onChange = e => {
        setValue(e.target.value);
        handleSelectedAnswer(e.target.value);
    }

    return(
        <Radio.Group onChange={ onChange } value={ value } disabled={ isDisabled }>
            {answerOptions.map((option,index) => (
                <Radio key={index} value={ option.value }>{ option.description }</Radio>
            ))}
        </Radio.Group>
    )
}

export default AnswerGroup;