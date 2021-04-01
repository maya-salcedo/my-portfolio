import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Description = styled.h2`
  color: #ffffff;
  font-weight: 300;
  font-size: 2rem;
  text-align: center;
  margin: 0;
  text-shadow: 0 0 10px #865858, 2px 2px 3px rgba(236,223,200,0.05);
`;

const CarouselWrapper = () => (
    <Carousel infiniteLoop useKeyboardArrows autoPlay showIndicators={false} showStatus={false} transitionTime={300} interval={3000} showThumbs={false}>
      <Description>a web developer</Description>        
      <Description>fast learner</Description>
      <Description>strongly motivated</Description>
      <Description>result-oriented</Description>
      <Description>team player</Description>
    </Carousel>
 );


export default CarouselWrapper; 
