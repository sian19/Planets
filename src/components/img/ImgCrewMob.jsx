import React, { useContext } from 'react';

import { DataContext } from '../contexApi/AuthContext';

import ImgCom from '../../assets/image-removebg-preview(289)mob.png';
import ImgSpec from '../../assets/image-removebg-preview(262) mob.png';
import ImgPilot from '../../assets/image-removebg-preview(288) mob.png';
import ImgEngin from '../../assets/image-removebg-preview(265) mob.png';

import styled from 'styled-components';

const ImgAstro = styled.img`
    position: relative;
    top: 4.4px;
`

function ImgCrewMob() {

    const { bullet } = useContext(DataContext);

    if (bullet == 0) {

        return (
            <ImgAstro src={ImgCom} alt="commander" />
        );
    }

    else if (bullet == 1) {

        return (
            <ImgAstro src={ImgSpec} alt='specialist' />
        );

    }

    else if (bullet == 2) {

        return (
            <ImgAstro src={ImgPilot} alt='pilot' />
        )

    }

    else {

        return (
            <ImgAstro src={ImgEngin} alt='enginner' />
        )

    }

}



export default ImgCrewMob;