import React, { useState } from 'react';
import Svg from '../Svg/Svg';
import PopupBox from '../PopupBox/PopupBox';
import styles from './InstaGramButton.module.css';
import QRinsta from '../../Images/QRinsta.jpeg'; // Import the QR code image

const InstaGramButton = () => {
  const [showQR, setShowQR] = useState(false);
  const instagramProfileUrl = process.env.REACT_APP_INSTAGRAM_PROFILE;

  const handleButtonClick = () => {
    setShowQR(true);
  };

  const handleClosePopup = () => {
    setShowQR(false);
  };

  return (
    <div className={styles.instagramButtonContainer} title="Go to @Stefaju on Instagram">
      <button
        className={styles.instagramButton}
        onClick={handleButtonClick}
        aria-label="Open Instagram QR Code and link" // Accessibility: Describes the button's action
      >
        <Svg symbolId="instagram"
            className={styles.icon}
            width={35}
            height={35}
        />
      </button>
      <PopupBox isVisible={showQR} onClose={handleClosePopup}>
        <img
          src={QRinsta}
          alt="Instagram QR Code" // Accessibility: Describes the QR code image
          className={styles.qrCodeImage}
        />
        <a
          href={instagramProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.qrLink}
        >
          @Stefaju
        </a>
      </PopupBox>
    </div>
  );
};

export default InstaGramButton;