//-------------- IMPORTS ---------------//
import React from 'react';
import styled from 'styled-components';

//-------------- STYLING ---------------//
const Container = styled.div`
  height: 60px;
  background-color: #76D7C4;
  color: white;
`
const Wrapper = styled.div`
  padding: 10px, 20px;
  display: flex;
  justify-content: space-between;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
`

//------------COMPONENT FUNCTION-------------//
const TitleBar = () => {
  return (
    <Container>
      <Wrapper>
        <Center>
          <Logo>
            Right now, I need...
          </Logo>
        </Center>
      </Wrapper>
    </Container>
  )
}

export default TitleBar