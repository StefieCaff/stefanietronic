import React from 'react';
import PropTypes from 'prop-types';
import styles from './Containers.module.css'; 
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
  // Style constants
  const gallery = {
    margin: '0 auto', // Auto margin to center the gallery
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center', // Center the items horizontally
  };

  const img = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  };

  const caption = {
    textAlign: 'center',
    marginTop: '8px',
    fontSize: '14px',
    color: '#555',
  };

  return (
    <div style={gallery}>
      {images.map((image, index) => (
        <div key={index} className={styles.imgContainer}> {/* Use className from CSS module */}
          <img src={image.src} alt={image.alt} style={img} />
          <p style={caption}>{image.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;




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
