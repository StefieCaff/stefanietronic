import React from 'react';
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

    const heading = 'Greetings! Explore my social media profiles below.';
    const subHeading = (
        <>
            For inquiries about joining your development team, climbing or yoga offerings, or other queries, feel free to reach out directly using the links provided below
            {' :) '}
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
