import React, { useContext } from 'react';

import imgRock1 from '../../assets/foguete1.png';
import imgRockMob1 from '../../assets/rocket-1.png';

import imgSpace from '../../assets/space.png';
import imgSpaceMob from '../../assets/space-mob.png';

import imgCapsule from '../../assets/capsule.png';
import imgCapsuleMob from '../../assets/capsule-mob.png';

import { DataContext } from '../contexApi/AuthContext';

function ImgTech() {

    const { ball } = useContext(DataContext);

    if (ball == 0) {

        return (
            <>
                <img src={imgRock1} alt="foguete" />
                <img src={imgRockMob1} alt="rocket" />
            </>
        );
    }

    else if (ball == 1) {
        return (
            <>
                <img src={imgSpace} alt="Space" />
                <img src={imgSpaceMob} alt="space" />
            </>
        );
    }

    else {
        return (
            <>
                <img src={imgCapsule} alt="Space" />
                <img src={imgCapsuleMob} alt="space" />
            </>
        )
    }
}

export default ImgTech;