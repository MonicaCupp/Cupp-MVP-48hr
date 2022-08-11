//--------------------- IMPORTS --------------------------------//

import React, { Fragment, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import NeedCard from './NeedCard.jsx';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #83677B;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space between;
  align-items: center;
`
//--------------------- MAIN COMPONENT FUNCTION WITH HOOKS------------------------//

const NeedCarousel = (props) => {
    return (
      <Container>
        <Carousel>
          <Carousel.Item>
            <NeedCard CardClickHandler={props.CardClickHandler}/>
          </Carousel.Item>
          <Carousel.Item>
            <NeedCard CardClickHandler={props.CardClickHandler}/>
          </Carousel.Item>
          <Carousel.Item>
            <NeedCard CardClickHandler={props.CardClickHandler}/>
          </Carousel.Item>
        </Carousel>
      </Container>
    )
};
export default NeedCarousel;