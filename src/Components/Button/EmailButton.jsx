// import React, { useState } from 'react';
// import Svg from '../Svg/Svg';
// import styles from './EmailButton.module.css';

// const EmailButton = () => {
//   const [showOptions, setShowOptions] = useState(false);
//   const [selectedService, setSelectedService] = useState('default');

//   const handleEmailClick = () => {
//     const email = process.env.REACT_APP_EMAIL;
//     let mailtoLink = '';

//     switch (selectedService) {
//       case 'gmail':
//         mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
//         break;
//       case 'yahoo':
//         mailtoLink = `https://compose.mail.yahoo.com/?to=${email}`;
//         break;
//       case 'outlook':
//         mailtoLink = `https://outlook.live.com/owa/?path=/mail/action/compose&to=${email}`;
//         break;
//       case 'default':
//       default:
//         mailtoLink = `mailto:${email}`;
//         break;
//     }

//     window.open(mailtoLink, '_blank');
//     setShowOptions(false); // Close the select field after an email service is selected
//   };

//   const handleButtonClick = () => {
//     if (showOptions && selectedService !== 'default') {
//       handleEmailClick();
//     } else {
//       setShowOptions(!showOptions);
//     }
//   };

//   const handleSelectChange = (e) => {
//     setSelectedService(e.target.value);
//     setShowOptions(false); // Close the select field after a service is selected
//   };

//   return (
//     <div className={styles.emailButtonContainer}>
//       {showOptions ? (
//         <select
//           value={selectedService}
//           onChange={handleSelectChange}
//           className={styles.emailSelect}
//           aria-label="Select Email Service"
//         >
//           <option value="default">Default Email</option>
//           <option value="gmail">Gmail</option>
//           <option value="yahoo">Yahoo Mail</option>
//           <option value="outlook">Outlook</option>
//         </select>
//       ) : null}
//       <div
//         className={styles.emailContainer}
//         onClick={handleButtonClick}
//         role="button"
//         tabIndex={0}
//         onKeyDown={(e) => e.key === 'Enter' && handleButtonClick()}
//         title="Send Stefie email"
//       >
//         <Svg
//           symbolId='paperplane2'
//           className={styles.icon}
//           width={30}
//           height={36}
//         />
//       </div>
//     </div>
//   );
// };

// export default EmailButton;

import React from 'react';
import Svg from '../Svg/Svg';
import styles from './EmailButton.module.css';

const EmailButton = () => {
  const email = process.env.REACT_APP_EMAIL;

  const handleEmailClick = () => {
    if (email) {
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
      const mailtoLink = `mailto:${email}`;
      
      // Try to open Gmail first, if not, fall back to default mail client
      const newWindow = window.open(gmailLink, '_blank');
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        window.location.href = mailtoLink;
      }
    } else {
      console.error("Email address is not defined. Please check your environment variables.");
    }
  };

  return (
    <div className={styles.emailButtonContainer}>
      <div
        className={styles.emailContainer}
        onClick={handleEmailClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleEmailClick()}
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
