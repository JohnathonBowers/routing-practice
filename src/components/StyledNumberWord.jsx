import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const Container = styled.div`
    margin-top: 100px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${ props => props.backgroundColor || ""};
    border: 1px solid black;
`;

const Message = styled.h1`
    text-align: center;
    color: ${ props => props.textColor || ""}
`;

const StyledNumberWord = (props) => {
    
    const { numberWord, textColor, backgroundColor } = useParams()
    
    return (
        <Container backgroundColor = {backgroundColor}>
            <Message textColor = {textColor}>
                {
                    isNaN(numberWord) ?
                    `The word is: ${ numberWord }` :
                    `The number is: ${ numberWord }`
                }
            </Message>
        </Container>
    )
}

export default StyledNumberWord