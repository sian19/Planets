import React from 'react';

import './tech.css';

import TextVehicle from './TextVehicle';
import TextSpaceport from './TextSpaceport';
import TextCapsule from './TextCapsule';

import Selector from './Selector';

import ImgTech from '../img/ImgTech';

function Tech() {
    return (
        <div className='container tech'>

            <div className='all'>
                <div className='title'>
                    <h3>03</h3>
                    <h3>SPACE LAUCH 101</h3>
                </div>

                <section>
                    <div className='n1t'>

                        <Selector />

                        <TextVehicle />
                        <TextSpaceport />
                        <TextCapsule />

                    </div>

                    <div className='n2t'>
                        <ImgTech />
                    </div>
                </section>
            </div>
        </div>


    )
}

export default Tech;