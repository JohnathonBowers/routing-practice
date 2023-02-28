import React from 'react'
import styled from 'styled-components';

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

const Home = () => {
    return (
        <Container>
            <Message>Welcome</Message>
        </Container>
    )
}

export default Home