/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import ImgNext from '../../../../../assets/img/next.png';
import ImgPrev from '../../../../../assets/img/return.png';

export default function Arrow({
  className, style, onClick, cor, next,
}) {
  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundImage: `URL(${next ? ImgNext : ImgPrev})`,
        backgroundColor: cor,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '20px 20px',
        borderRadius: '50px',
      }}
      onClick={onClick}
      onKeyUp={onClick}
    />
  );
}

Arrow.defaultProps = {
  style: {},
  className: '',
  next: false,
  onClick: () => {},
};

Arrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  onClick: PropTypes.func,
  cor: PropTypes.string.isRequired,
  next: PropTypes.bool,
};
