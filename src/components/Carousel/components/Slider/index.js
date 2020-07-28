/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

import next from "../../../../assets/img/next.png";
import prev from "../../../../assets/img/return.png";


const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    
    &:before {
      font-size: 30px;
      color: transparent;
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;


function Arrow(props){
  const {className, style, onClick, cor} = props;

  return(
    <div
      className={className}
      style={{
        ...style, 
        backgroundImage: `URL(${props.next ? next : prev})`, 
        backgroundColor: cor,  
        backgroundPosition:"center", 
        backgroundSize: "cover",
        borderRadius: "50px"
      }}
      onClick={onClick}
    >
    </div>
  )
}

const Slider = ({ children, cor }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      nextArrow: <Arrow next cor={cor}/>,
      prevArrow: <Arrow cor={cor}/>,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 