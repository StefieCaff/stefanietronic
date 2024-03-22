import { useState, useRef } from 'react';
import Svg from '../Components/Svg/Svg';
import styles from './Contact.module.css';
import { Container, Section } from '../Components/Containers/Containers';
import Clouds from '../Components/Clouds/Clouds';
import Heading from '../Components/Heading/Heading';

const Contact = () => {
    const email = process.env.REACT_APP_EMAIL;
    const githubProfileUrl = process.env.REACT_APP_GITHUB_PROFILE;
    const linkedinProfileUrl = process.env.REACT_APP_LINKEDIN_PROFILE;
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
    const heading = 'Greetings! Explore my social media profiles below.'
    const subHeading = (
        <>
           For inquiries about joining your development team, exploring climbing or yoga offerings, or any other queries, feel free to reach out directly:
        {' '}
        <a href={`mailto:${email}`} aria-label="Email Stefie">Email Stefie</a>.
        {' '}
        Thank you!
        </>
    );
   

    return (
        <Section>
            <Container>
                <Heading
                    heading={heading}
                    subHeading={subHeading}
                />
                <div className={styles.contactOptions}>
                    <div>
                        <ul>
                            <li>
                            <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                                <Svg symbolId="github" />
                                </a>
                            </li>
                            <li>
                                <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                                    <Svg symbolId="linkedin" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <Clouds/>
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
                >
                    <Svg symbolId="planebutton" className={styles.resetButton} />
                </div>
            </Container>
        </Section>
    );
};

export default Contact;