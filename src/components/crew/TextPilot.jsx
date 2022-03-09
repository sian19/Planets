import React, { useState, useContext, useEffect } from 'react';

import { DataContext } from '../contexApi/AuthContext';

import Bullet from './Bullet';

function TextPilot() {

    const [pilot, setPilot] = useState('');

    const { bullet } = useContext(DataContext);

    useEffect(() => {

        setPilot(bullet == 2 ? 'block' : 'none');

    }, [bullet])

    return (
        <div className='text-crew' style={{ display: pilot, }}>
            <section className='pilot-crew'>
                <div className='pilot-text'>
                    <h3>PILOT</h3>
                    <h2>VICTOR GLOVER</h2>

                    <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
                </div>

                <Bullet />

            </section>
        </div>
    )
}

export default TextPilot;