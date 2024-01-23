import React from 'react';

import { errorImages } from '../Images/imageSets';
import { ImageGallery } from '../Components/Containers/Containers';
// import image from '../Images/fold1.jpg'
const Error = () => {
    return (
        <>
            <p>Error Page</p>
            <ImageGallery images={errorImages}/>
            {/* <img src={image} alt="fold1"></img> */}
            <p>https://www.foldnfly.com/1.html#Basic-Dart</p>
        </>

    )
};

export default Error;