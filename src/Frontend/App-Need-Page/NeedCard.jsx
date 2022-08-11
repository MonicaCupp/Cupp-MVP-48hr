//---------------- IMPORTS ------------------------------------//
import React from "react";
import styled from 'styled-components';

//--------------Styling----------------------------------------//

const Container = styled.div`
  flex: .25;
  margin: 3px;
  height: 50vh;
  position: relative;
  cursor: pointer;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 40%;
  bottom: -5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`
const Category = styled.div`
  color: #501B1D;
`
//----------------- MAIN FUNCTIONAL COMPONENT -----------------//

const NeedCard = (props) => {
  return (
    <Container>
      <Image src={"eat.jpg"} onClick={() => {props.CardClickHandler()}}
        />
      <Info>
        <Category>EAT</Category>
      </Info>
    </Container>
  )

};

export default NeedCard