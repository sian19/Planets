import React from 'react';

import Img from '../img/Img';

import NavPlanet from '../nav-planet/NavPlanet';

import TextMoon from './TextMoon';
import TextMars from './TextMars';
import TextEuro from './TextEuro';
import TextTitan from './TextTitan';

import './planets.css'

function Planets() {
    return (
        <div className='planets'>
            <div className='n1'>
                <div className='title'>
                    <h3>01</h3>
                    <h3>PICK YOUR DESTINATION</h3>
                </div>

                <Img />
            </div>

            <div className='n2'>
                <NavPlanet />

                <TextMoon />
                <TextMars />
                <TextEuro />
                <TextTitan />
            </div>
        </div>
    );
}

export default Planets;