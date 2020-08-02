import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding: ${({ paddingAll }) => `${paddingAll}px`};
`;

export default function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

PageDefault.defaultProps = {
  paddingAll: 0,
};

PageDefault.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
  paddingAll: PropTypes.number,
};
