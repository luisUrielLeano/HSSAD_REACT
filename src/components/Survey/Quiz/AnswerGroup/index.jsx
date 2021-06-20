import React, { useState } from 'react';
import { Radio } from 'antd';

const AnswerGroup = ( { handleSelectedAnswer, isDisabled, positive } ) => {
    let values = [
        1,
        2,
        3,
        4,
    ];

    const descriptions = [
        'En ningún momento (menos de 1 día)',
        'Un poco del tiempo (1-2 días)',
        'Ocasionalmente (3-4 días)',
        'La mayoría del tiempo (5-7 días)',
    ];

    const [value, setValue] = useState();

    const onChange = e => {
        setValue(e.target.value);
        handleSelectedAnswer(e.target.value);
    }

    return(
        <Radio.Group onChange={ onChange } value={ value } disabled={ isDisabled }>
            {values = positive ? values.reverse() : values}
            {descriptions.map((description,index) => (
                <Radio key={index} value={ values[index] }>{  description }</Radio>
            ))}
        </Radio.Group>
    )
}

export default AnswerGroup;