// import { useState, useRef } from 'react';
// import Svg from '../Components/Svg/Svg';
// import styles from './Contact.module.css';
// import { Container, Section } from '../Components/Containers/Containers';
// import Clouds from '../Components/Clouds/Clouds';
// import Heading from '../Components/Heading/Heading';
// import Footer from '../Components/Footer/Footer';
// import Cloud from '../Components/Clouds/Cloud';

// const Contact = () => {
//     const email = process.env.REACT_APP_EMAIL;
//     const [animationState, setAnimationState] = useState('plane1');
//     const svgRef = useRef(null);
    
//     const handleAnimationEnd = () => {
//         setAnimationState('plane2');
//     };

//     const resetAnimation = () => {
//         setAnimationState('plane1');
//         // Trigger reflow to restart animation
//         void svgRef.current.offsetWidth;
//     };

//     const handleKeyDown = (event) => {
//         if (event.key === 'Enter') {
//             resetAnimation();
//         }
//     };
//     const heading = 'Greetings! Explore my social media profiles below.'
//     const subHeading = (
//         <>
//            For inquiries about joining your development team, climbing or yoga offerings, or other queries, feel free to reach out directly:
//         {' '}
//         <a href={`mailto:${email}`} aria-label="Email Stefie" title="email stefiecaff@gmail.com">Email Stefie</a>.
//         {' '}
//         Thank you!
//         </>
//     );
//     return (
//         <>
//         <Section>
//                 <Container>
                    
//                 <Heading
//                     heading={heading}
//                     subHeading={subHeading}
//                 />
//                     <Section>
                        
//                     <Clouds/>
//                 </Section>
//                 <div className={styles[animationState]} onAnimationEnd={handleAnimationEnd}>
//                     <Svg symbolId={animationState === 'plane1' ? 'planetop' : 'planefront'} />
//                 </div>
//                 <div
//                     className={styles.animationReset}
//                     tabIndex="0"
//                     onClick={resetAnimation}
//                     onKeyDown={handleKeyDown}
//                     ref={svgRef}
//                     aria-label="Reset animation"
//                     role="button"
//                     title="click for Take-off!"
//                 >
//                     <Svg symbolId="planebutton" className={styles.resetButton} />
//                 </div>
//             </Container>
//             </Section>
//             <Footer>
//                 <Cloud/>
//             </Footer>
        
//         </>
//     );
// };

// export default Contact;

import { useState, useRef } from 'react';
import Svg from '../Components/Svg/Svg';
import styles from './Contact.module.css';
import { Container, Section } from '../Components/Containers/Containers';
import Clouds from '../Components/Clouds/Clouds';
import Heading from '../Components/Heading/Heading';
import Footer from '../Components/Footer/Footer';
import Cloud from '../Components/Clouds/Cloud';

const Contact = () => {
    const email = process.env.REACT_APP_EMAIL;
    const [animationState, setAnimationState] = useState('plane1');
    const svgRef = useRef(null);

    const handleAnimationEnd = () => {
        setAnimationState('plane2');
    };

    const resetAnimation = () => {
        setAnimationState('plane1');
        // Trigger reflow to restart animation
        void svgRef.current.offsetWidth;
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            resetAnimation();
        }
    };

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
            console.error("Something went wrong trying to email, please try again later.");
        }
    };

    const heading = 'Greetings! Explore my social media profiles below.';
    const subHeading = (
        <>
            For inquiries about joining your development team, climbing or yoga offerings, or other queries, feel free to reach out directly:
            {' '}
            <span
                onClick={handleEmailClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleEmailClick()}
                aria-label="Email Stefie"
                title="Email Stefie"
                className={styles.emailLink}
            >
                Email Stefie
            </span>.
            {' '}
            Thank you!
        </>
    );

    return (
        <>
            <Section>
                <Container>
                    <Heading
                        heading={heading}
                        subHeading={subHeading}
                    />
                    <Section>
                        <Clouds />
                    </Section>
                    <div className={styles[animationState]} onAnimationEnd={handleAnimationEnd}>
                        <Svg symbolId={animationState === 'plane1' ? 'planetop' : 'planefront'} />
                    </div>
                    <div
                        className={styles.animationReset}
                        tabIndex="0"
                        onClick={resetAnimation}
                        onKeyDown={handleKeyDown}
                        ref={svgRef}
                        aria-label="Reset animation"
                        role="button"
                        title="click for Take-off!"
                    >
                        <Svg symbolId="planebutton" className={styles.resetButton} />
                    </div>
                </Container>
            </Section>
            <Footer>
                <Cloud />
            </Footer>
        </>
    );
};

export default Contact;
