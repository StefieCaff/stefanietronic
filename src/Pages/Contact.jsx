import React from 'react';
import Svg from '../Components/Svg/Svg';

const Contact = () => {
    return (
        <div>
            <h2>Please, be in touch</h2>
            <p>I am available on the following social media platforms:</p>
            <ul>
                <li>
                    
                    <a href="https://github.com/StefieCaff" target="_blank" rel="noopener noreferrer"><Svg symbolId="github" /></a>
                </li>
                <li>
                    
                    <a href="https://www.linkedin.com/in/stefanie-caffarel-888209113" target="_blank" rel="noopener noreferrer"><Svg symbolId="linkedin" /></a>
                </li>
                <li>
                    
                     <a href="https://www.instagram.com/stefaju/?igsh=MXhtY2U2czYyb3Y0Yg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"><Svg symbolId="instagram" /></a>
                </li>
            </ul>
        </div>
    )
};

export default Contact;