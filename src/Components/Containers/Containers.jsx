import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <div style={{ padding: '0 auto', margin: '0 auto' }}>
      {children}
    </div>
  );
};

const Section = ({ children, topSpacing, bottomSpacing }) => {
  const sectionStyle = {
    paddingTop: topSpacing !== undefined ? topSpacing : 20,
    paddingBottom: bottomSpacing !== undefined ? bottomSpacing : 20,
    minWidth: 'auto'
  };

  return <div style={sectionStyle}>{children}</div>;
};

const FlexHeader = ({ children }) => {
  const flexContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: 'green',
  };

  return <div style={flexContainerStyle}>{children}</div>;
};

const ImageGallery = ({ images }) => {
  
  const galleryStyle = {
    margin: '20px',
    padding: '20px 0',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  };
  const imageContainerStyle = {
    flex: 1,
  };
  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  };
  const captionStyle = {
  textAlign: 'center',
  marginTop: '8px',
  fontSize: '14px',
  color: '#555',
  };
  
  return (
    <div style={galleryStyle}>
      {images.map((image, index) => (
        <div key={index} style={imageContainerStyle}>
          <img src={image.src} alt={image.alt} style={imageStyle} />
          <p style={captionStyle}>{ image.caption}</p>
        </div>
      ))}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  topSpacing: PropTypes.number,
  bottomSpacing: PropTypes.number,
};

FlexHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
    })
  ).isRequired,
}
export {Container, Section, FlexHeader, ImageGallery};
