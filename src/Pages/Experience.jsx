import React from 'react';

import Footer from '../Components/Footer/Footer';
import Snail from '../Components/Snail/Snail';
import Clouds from '../Components/Clouds/Clouds';
import Heading from '../Components/Heading/Heading';

const Experience = () => {
    const experienceHeading = "The Stefie Ventures!";
const experienceSubHeading = "Take a look at where I've worked and how I spend my time :)";

    return (
        <>
            <Heading
                heading={experienceHeading}
                subHeading={experienceSubHeading}
            />
            <Snail />
            <Clouds speed='Speed2'/>
            <Footer />
        </>

    )
};

export default Experience;