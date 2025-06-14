import React, { useState } from 'react';
import Svg from '../Svg/Svg';
import styles from './EmailButton.module.css';

const EmailButton = () => {
  const [showOptions, setShowOptions] = useState(false);
  const email = process.env.REACT_APP_EMAIL;

  const handleEmailClick = (service) => {
  if (!email) {
    console.error("Email address is not available, please use LinkedIn GitHub or Instagram to connect.");
    return;
  }

  let mailtoLink = '';
  switch (service) {
    case 'gmail':
      mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
      break;
    case 'yahoo':
      mailtoLink = `https://compose.mail.yahoo.com/?to=${email}`;
      break;
    case 'outlook':
      mailtoLink = `https://outlook.live.com/owa/?path=/mail/action/compose&to=${email}`;
      break;
    case 'default':
    default:
      mailtoLink = `mailto:${email}`;
      break;
  }

  // Open the link in a new tab
  window.open(mailtoLink, '_blank');
  setShowOptions(false);
};

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div 
      className={styles.emailButtonContainer}
      onMouseLeave={() => setShowOptions(false)}
    >
      {showOptions && (
        <div className={`${styles.emailOptions} ${styles.visible}`}>
          <button
            onClick={() => handleEmailClick('gmail')}
            className={styles.emailOption}
            aria-label="Open Gmail"
          >
            Gmail
          </button>
          <button
            onClick={() => handleEmailClick('yahoo')}
            className={styles.emailOption}
            aria-label="Open Yahoo Mail"
          >
            Yahoo
          </button>
          <button
            onClick={() => handleEmailClick('outlook')}
            className={styles.emailOption}
            aria-label="Open Outlook"
          >
            Outlook
          </button>
          <button
            onClick={() => handleEmailClick('default')}
            className={styles.emailOption}
            aria-label="Open default email client"
          >
            Default Email Client
          </button>
        </div>
      )}
      <div
        className={styles.emailContainer}
        onClick={handleButtonClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleButtonClick()}
        title="Send Stefie email"
      >
        <Svg
          symbolId='paperplane2'
          className={styles.icon}
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};

export default EmailButton;
