import React from 'react';
import Svg from '../Components/Svg/Svg';
import QRCode from 'react-qr-code';

const Contact = () => {
    const email = 'stefiecaff@gmail.com';
     const instagramProfileUrl = 'https://www.instagram.com/stefaju/?igsh=MXhtY2U2czYyb3Y0Yg%3D%3D&utm_source=qr';
    return (
        <div>
            <h2>Reach out via email:</h2>
            <a href={`mailto:${email}`}>Email Stefie</a>
            <p>Alternatively, I am available on the following social media platforms:</p>
            <ul>
                <li>
                    
                    <a href="https://github.com/StefieCaff" target="_blank" rel="noopener noreferrer"><Svg symbolId="github" /></a>
                </li>
                <li>
                    
                    <a href="https://www.linkedin.com/in/stefanie-caffarel-888209113" target="_blank" rel="noopener noreferrer"><Svg symbolId="linkedin" /></a>
                </li>
                <li>
                    
                    <a href="https://www.instagram.com/stefaju/?igsh=MXhtY2U2czYyb3Y0Yg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"><Svg symbolId="instagram" /></a>
                     <a href={instagramProfileUrl} target="_blank" rel="noopener noreferrer">
        Visit My Instagram Profile
      </a>
      <QRCode value={instagramProfileUrl} />
                </li>
            </ul>
        </div>
    )
};

export default Contact;