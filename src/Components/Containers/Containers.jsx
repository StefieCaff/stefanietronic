import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <div style={{ padding: '0 20px', margin: '0 auto', maxWidth: '1200px' }}>
      {children}
    </div>
  );
};

const Section = ({ children, topSpacing, bottomSpacing }) => {
  const sectionStyle = {
    paddingTop: topSpacing || 20,
    paddingBottom: bottomSpacing || 20,
  };

  return <div style={sectionStyle}>{children}</div>;
};

const FlexHeader = ({ children }) => {
  const flexContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
  };

  return <div style={flexContainerStyle}>{children}</div>;
};

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

export {Container, Section, FlexHeader};
