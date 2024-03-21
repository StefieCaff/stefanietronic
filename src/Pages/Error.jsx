import React from 'react';

import { errorImages } from '../Images/imageSets';
import { Container, ImageGallery, Section } from '../Components/Containers/Containers';
// import image from '../Images/fold1.jpg'
const Error = () => {
    const wrapperStyle = {
        margin: '0 10px',
    };

    return (
        <Section>
            <Container><div style={wrapperStyle}>
                <ImageGallery images={errorImages}/></div>
                <p>https://www.foldnfly.com/1.html#Basic-Dart</p>
            </Container>
        </Section>
    )
};

export default Error;