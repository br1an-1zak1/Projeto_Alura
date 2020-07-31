/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Arrow from './components/Arrow';

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

const Slider = ({ children, cor }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      nextArrow: <Arrow next cor={cor} />,
      prevArrow: <Arrow cor={cor} />,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

Slider.defaultProps = {
  cor: '',
  children: [PropTypes.object],
};

Slider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
  cor: PropTypes.string,
};

export default Slider;
