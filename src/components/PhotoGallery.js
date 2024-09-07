
// src/components/PhotoGallery.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/CoffeeShopAtNight.jpg';
import image2 from '../images/ColumbiaRiver.jpg';
import image3 from '../images/FarmJunk.jpg';
import image4 from '../images/NYCSubway (2).png';
import image5 from '../images/JacksonSquareNOLA.jpg';
import image6 from '../images/WestheimerSunset.jpg';

const PhotoGallery = () => {
    // Assuming photos is an array of image URLs
    const photos = [
        image1, image2, image3, image4, image5, image6,
    ];

    return (
        <div className="photo-gallery">
            {photos.map(
                (photo, index) => (
                    <Link to={`/photo/${index}`}
                        key={index}>
                        <img src={photo}
                            alt={`Photo ${index + 1}`} />
                    </Link>
                ))}
        </div>
    );
};

export default PhotoGallery;
