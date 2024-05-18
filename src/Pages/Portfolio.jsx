import React from 'react';
import Heading from '../Components/Heading/Heading';
import { Container, Section } from '../Components/Containers/Containers';
import Footer from '../Components/Footer/Footer';
import Grass from '../Components/Grass/Grass';


const Portfolio = () => {
    const portfolioHeading = 'Recent Coding Projects!'
    const portfolioSubHeading= "Explore some works I've created and co-created during my dive into Full-Stack Web Dev! Click the links to check them out."

    return (
        <>
        <Section>
            <Container>
        <div>
            <Heading
               heading={portfolioHeading}
                subHeading={portfolioSubHeading}                />
            
            <ul>
                <li>Project 1</li>
                <li>Project 2</li>
            </ul>
                </div>
            </Container>
            </Section>
            <Footer>
                <Grass />
            </Footer>
        </>
    );
};

export default Portfolio;
