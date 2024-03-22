import React from 'react';
import Heading from '../Components/Heading/Heading';


const Portfolio = () => {
    const portfolioHeading = 'Recent Coding Projects!'
    const portfolioSubHeading= "Explore some works I've created or collaborated on during my dive into Full-Stack Web Dev! Click the links below to check them out."

    return (
        <div>
            <Heading
               heading={portfolioHeading}
                subHeading={portfolioSubHeading}                />
            
            <ul>
                <li>Project 1</li>
                <li>Project 2</li>
            </ul>
        </div>
    );
};

export default Portfolio;
