import React from 'react';

import { errorImages } from '../Images/imageSets';
import { Container, ImageGallery, Section } from '../Components/Containers/Containers';
import Heading from '../Components/Heading/Heading';
import '../index.css'

const Error = () => {
    const wrapperStyle = {
        margin: '0 10px',
    };

    const homeLink = 'http://localhost:3000/'
    const heading = "eeep! An error of some kind!"
    const subHeading = (
        <>
            Try navigating <a className='errorLink'href={homeLink}>home</a>. 
            If that doesn't work, try out this cool paper airplane fold!
            The error will be resolved soon :)
        </>
    );

    return (
        <Section>
            <Container><div style={wrapperStyle}>
                <Heading
                    heading={heading}
                    subHeading={subHeading}
                />
                <ImageGallery images={errorImages}/></div>
                <p className='errorCredit'>https://www.foldnfly.com/1.html#Basic-Dart</p>
            </Container>
        </Section>
    )
};

export default Error;