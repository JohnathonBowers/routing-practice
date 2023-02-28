import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom';

const Container = styled.div`
    margin-top: 100px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Message = styled.h1`
    text-align: center;
`;

const NumberWord = (props) => {
    
    const { numberWord } = useParams()

    return (
        <Container>
            <Message>
                {
                    isNaN(numberWord) ?
                    `The word is: ${ numberWord }` :
                    `The number is: ${ numberWord }`
                }
            </Message>
        </Container>
    )
}

export default NumberWord