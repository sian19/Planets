import React from 'react';

import './crew.css';
import '../planets/text.css';

import ImgCrew from '../img/ImgCrew';
import ImgCrewMob from '../img/ImgCrewMob';

import TextComander from './TextComander';
import TextSpecialist from './TextSpecialist';
import TextPilot from './TextPilot';
import TextEngineer from './TextEngineer';

function Crew() {

    return (
        <div className='container crew'>

            <div className='flex-crew'>
                <div className='n1c'>
                    <div className='title'>
                        <h3>02</h3>
                        <h3>MEET YOUR CREW</h3>
                    </div>

                    <div className='pilot-img'>
                        <ImgCrewMob />
                    </div>

                    <TextComander />
                    <TextSpecialist />
                    <TextPilot />
                    <TextEngineer />
                </div>

                <div className='n2c'>
                    <ImgCrew />
                </div>
            </div>
        </div>
    );
}

export default Crew;
