import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Svg from '../Svg/Svg';
import './Tooltip.css'; // Create and import the CSS file for styling


const Tooltip = ({ message }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Svg symbolId="questionMark" width={16} height={16} />
      {isHovered && <div className="tooltip-message">{message}</div>}
    </div>
  );
};

Tooltip.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Tooltip;
