/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

const HomeDiv = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  min-height: calc(100vh - 56px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url(${require('../assets/stryn-kayak.jpg')});
`;

const CarouselDiv = styled.div`
  background-color: #f4f7f9;
  border: 1px solid #f4f7f9;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  padding: 8px;
  width: 380px;
`;

export default function Home() {
  return (
    <HomeDiv>
      <CarouselDiv>
        <Carousel interval={20000}>
          <Carousel.Item>
            <img
              style={{ height: '485px' }}
              className="d-block w-100"
              src={require('../assets/joe_portrait_1.png')}
              alt=""
            />
            <Carousel.Caption>
              <h3>Joe Straathof</h3>
              <p>I am a nerd</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '485px' }}
              className="d-block w-100"
              src={require('../assets/joe_portrait_1.png')}
              alt=""
            />
            <Carousel.Caption>
              <h3>Interesting Facts</h3>
              <p>I have almost no pictures of joe</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </CarouselDiv>
    </HomeDiv>
  );
}
