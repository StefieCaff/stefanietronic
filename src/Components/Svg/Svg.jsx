import React from 'react';
import PropTypes from 'prop-types';
import Sprite from './sprite.svg'
const Svg = ({ symbolId, className, width, height, onClick }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || '100%'} height={height || '100%'} className={className} onClick={onClick}>
      <use href={Sprite + `#${symbolId}`} />
    </svg>
  );
};

Svg.propTypes = {
  symbolId: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
};

export default Svg;