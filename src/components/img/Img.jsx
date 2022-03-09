import React, { useContext } from 'react';

import imgMoon from '../../assets/Bitmap-moon.png';
import imgMars from '../../assets/mars.png';
import imgEuro from '../../assets/euro.png';
import imgTitan from '../../assets/titan.png';

import { DataContext } from '../contexApi/AuthContext';

function Img() {

    const { countX } = useContext(DataContext);

    if (countX == 0) {
        return (
            <div className='img-planet'><img src={imgMoon} alt="Moon" /></div>
        )
    }

    else if (countX == 1) {
        return (
            <div className='img-planet'> <img src={imgMars} alt="Mars" /></div>
        )
    }

    else if (countX == 2) {
        return (
            <div className='img-planet'><img src={imgEuro} alt="Euro" /></div>
        )
    }

    else {
        return (
            <div className='img-planet'><img src={imgTitan} alt="Titan" /></div>
        )
    }


}

export default Img;