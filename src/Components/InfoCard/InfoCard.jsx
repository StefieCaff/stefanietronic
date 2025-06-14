import React, { useState } from 'react';

const InfoCard = ({ imageSrc, altText, infoContent }) => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  const handleCardClick = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  // Inline styles
  const cardContainerStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '250px',
    height: '350px',
    margin: '0',
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    boxShadow: isHovered
      ? '0 8px 16px rgba(0, 0, 0, 0.2)' // Stronger shadow on hover
      : '0 4px 8px rgba(0, 0, 0, 0.1)', // Default shadow
    transform: isHovered ? 'scale(.9)' : 'scale(1)',
    transition: 'transform 0.5s ease, box-shadow 0.5s ease',
  };

  const cardImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensures the image fills the container
    display: 'block', // Removes any inline spacing issues
  };

  const infoBlockStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '40%',
    background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)', // Match the Diamond button gradient
    color: '#333',
    padding: '12px',
    boxSizing: 'border-box',
    textAlign: 'left',
    fontSize: '16px',
    lineHeight: '1.2',
    fontWeight: 'bolder',
    transform: isInfoVisible ? 'translateY(0)' : 'translateY(100%)',
    transition: 'transform 0.5s ease',
    borderRadius: '0 0 16px 16px',
  };

  return (
    <button
      style={cardContainerStyle}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)} // Set hover state on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Remove hover state on mouse leave
      aria-expanded={isInfoVisible}
    >
      <img src={imageSrc} alt={altText} style={cardImageStyle} />
      <div style={infoBlockStyle}>{infoContent}</div>
    </button>
  );
};

export default InfoCard;