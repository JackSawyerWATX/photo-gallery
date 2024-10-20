
// src/components/PhotoGallery.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/CoffeeShopAtNight.jpg';
import image2 from '../images/ColumbiaRiver.jpg';
import image3 from '../images/FarmJunk.jpg';
import image4 from '../images/NYCSubway (2).png';
import image5 from '../images/JacksonSquareNOLA.jpg';
import image6 from '../images/WestheimerSunset.jpg';
import image7 from '../images/BookerChurch.jpg';
import image8 from '../images/BookerGrainElevator.jpg';
import image9 from '../images/BookerSunrise.jpg';
import image10 from '../images/BookerSunrise2.jpg';
import image11 from '../images/BookerSunrise3.jpg';
import image12 from '../images/BookerTexas.jpg';
import image13 from '../images/BumpersUpClose.jpg';
import image14 from '../images/Cracker.jpg';
import image15 from '../images/DixieDogSign.jpg';
import image16 from '../images/DixieDogMenu.jpg';
import image17 from '../images/EasternAndMitchell.jpg';
import image18 from '../images/GrainElevatorInDarrouzett.jpg';
import image19 from '../images/MorePrairie.jpg';
import image20 from '../images/Prairie.jpg';
import image21 from '../images/PrariePumpJack.jpg';
import image22 from '../images/StopAlongRoute66.jpg';
import image23 from '../images/SideOfStopAlongRoute66.jpg';
import image24 from '../images/Sunflower.jpg';
import image25 from '../images/TexRandall.jpg';
import image26 from '../images/TheMesa.jpg';
import image27 from '../images/TX604.jpg';
import image28 from '../images/TXHwy23.jpg';
import image29 from '../images/Warehouse.jpg';
import image30 from '../images/EmmettAndCracker.jpg';
import image31 from '../images/GasWorksPark.jpg';
import image32 from '../images/GasWorksPark2.jpg';
import image33 from '../images/CrackerCuddeledUp.jpg';
import image34 from '../images/AquaPura.jpg';
import image35 from '../images/BlackHoleSun.jpg';
import image36 from '../images/CherryBlossoms.jpg';
import image37 from '../images/TheWinslow.jpg';
import image38 from '../images/CoffeeBreak.jpg';
import image39 from '../images/Edgefield.jpg';
import image40 from '../images/InsideDicks.jpg';
import image41 from '../images/OneWTC.jpg';
import image42 from '../images/StPatricksCath.jpg';
import image43 from '../images/TavernOnTheGreen.jpg';
import image44 from '../images/ToBe.jpg';
import image45 from '../images/Entrance.jpg';

const PhotoGallery = () => {
    // Assuming photos is an array of image URLs
    const photos = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        image18,
        image19,
        image20,
        image21,
        image22,
        image23,
        image24,
        image25,
        image26,
        image27,
        image28,
        image29,
        image30,
        image31,
        image32,
        image33,
        image34,
        image35,
        image36,
        image37,
        image38,
        image39,
        image40,
        image41,
        image42,
        image43,
        image44,
        image45,
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
