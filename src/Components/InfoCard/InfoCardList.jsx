import React from 'react';
import InfoCard from './InfoCard';

const InfoCardList = ({ cards }) => {
  // Inline styles for the card list container
  const cardListContainerStyle = {
    margin: '0 auto', // Center the container
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px', // Match the spacing used in the ImageGallery
    justifyContent: 'center',
  };

  return (
    <div style={cardListContainerStyle}>
      {cards.map((card, index) => (
        <InfoCard
          key={index}
          imageSrc={card.imageSrc}
          altText={card.altText}
          infoContent={card.infoContent}
        />
      ))}
    </div>
  );
};

export default InfoCardList;