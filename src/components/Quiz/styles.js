import styled from 'styled-components';

export const QuestionsWrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
`
export const Question = styled.div`
    padding: 35px 0 20px;
    width: 100%;
    max-width: 400px;
    border-bottom: 1px solid #dcdcdc;
`
export const Statement = styled.div`
    color: #576071;
    font-weight: 600;
    text-align: center;
`

export const Option = styled.div`
    border-radius: 50%
    cursor: pointer;
    display: flex;
    border: 2px solid #56ac8a;
`