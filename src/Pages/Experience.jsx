import React from 'react';

import Footer from '../Components/Footer/Footer';
import Snail from '../Components/Snail/Snail';
import Clouds from '../Components/Clouds/Clouds';

const Experience = () => {
    return (
        <>
            <p>Experience Page</p>
            <Snail />
            <Clouds speed='Speed2'/>
            <Footer/>
        </>

    )
};

export default Experience;