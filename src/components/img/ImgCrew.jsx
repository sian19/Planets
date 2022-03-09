import React, { useContext } from 'react';

import './img-crew.css';

import imgComander from '../../assets/image-removebg-preview(289).png';
import imgSpecialist from '../../assets/image-removebg-preview(262).png';
import imgPilot from '../../assets/image-removebg-preview(288).png';
import imgEnginner from '../../assets/image-removebg-preview(265).png';

import { DataContext } from '../contexApi/AuthContext';

function ImgCrew() {

    const { bullet } = useContext(DataContext);

    if (bullet == 0) {

        return (
            <img src={imgComander} alt="comander" className='img-commander' />
        );

    }

    else if (bullet == 1) {

        return (
            <img src={imgSpecialist} alt="specialist" className='img-specilist' />
        )

    }

    else if (bullet == 2) {

        return (
            <img src={imgPilot} alt="pilot" className='img-pilot' />
        )

    }

    else if (bullet == 3) {
        return (
            <img src={imgEnginner} alt="enginner" className='enginner' />
        )
    }

}

export default ImgCrew;