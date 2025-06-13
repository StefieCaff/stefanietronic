import React from 'react';
import ReactDOM from 'react-dom';
import styles from './PopupBox.module.css';

const PopupBox = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <>
      {/* Overlay to block interactions with the background */}
      <div
        className={styles.popupOverlay}
        onClick={onClose}
        aria-hidden="true" // Accessibility: Marks the overlay as non-interactive for screen readers
      ></div>
      
      {/* Popup box */}
      <div
        className={styles.popupBox}
        role="dialog" // Accessibility: Identifies the popup as a dialog
        aria-modal="true" // Accessibility: Indicates that the dialog is modal
        onMouseLeave={onClose} // Close when mouse leaves the popup box
      >
        <div className={styles.popupContent}>{children}</div>
      </div>
    </>,
    document.body // Render the popup at the root level of the DOM
  );
};

export default PopupBox;