import React, { useState } from 'react';
import Svg from '../Svg/Svg';
import styles from './EmailButton.module.css';

const EmailButton = () => {
  const [showOptions, setShowOptions] = useState(false);
  const email = process.env.REACT_APP_EMAIL;

  const handleEmailClick = (service) => {
    if (!email) {
      console.error("Email address is not available, please use LinkedIn to connect.");
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
        mailtoLink = `mailto:${email}`;
        break;
      default:
        return;
    }

    if (service === 'default') {
      // Simple mailto: link
      window.location.href = mailtoLink;
    } else {
      window.open(mailtoLink, '_blank');
    }
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
            Default Email
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
          height={36}
        />
      </div>
    </div>
  );
};

export default EmailButton;
