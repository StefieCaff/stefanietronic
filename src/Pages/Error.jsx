import React from 'react';

import { errorImages } from '../Images/imageSets';
import { Container, ImageGallery, Section } from '../Components/Containers/Containers';
import Heading from '../Components/Heading/Heading';
// import image from '../Images/fold1.jpg'
const Error = () => {
    const wrapperStyle = {
        margin: '0 10px',
    };

    const homeLink ='http://localhost:3000/'
    const text = (
        <>
            eeep! There has been an error of some kind. Try navigating <a href={homeLink}>home</a>. 
            If that doesn't work grab a coffee, take a break in the sun, or try out this cool paper airplane fold!
            Hopefully it will be resolved soon :)
        </>
    );

    return (
        <Section>
            <Container><div style={wrapperStyle}>
                <Heading text={text} />
                <ImageGallery images={errorImages}/></div>
                <p>https://www.foldnfly.com/1.html#Basic-Dart</p>
            </Container>
        </Section>
    )
};

export default Error;