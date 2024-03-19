import { useState, useRef } from 'react';
import Svg from '../Components/Svg/Svg';
import styles from './Contact.module.css';
import { Container, Section } from '../Components/Containers/Containers';
import Clouds from '../Components/Clouds/Clouds';

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

    return (
        <Section>
            <Container>
                <h2>Get in Touch directly by email, or check out my GitHub and LinkedIn profiles.</h2>
                <div className={styles.contactOptions}>
                  <div className={styles.emailOption}>
                        <a href={`mailto:${email}`} aria-label="Email Stefie">Email Stefie</a>
                    </div>
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