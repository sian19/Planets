import React, { useState, useContext, useEffect } from 'react';

import { DataContext } from '../contexApi/AuthContext';

import Bullet from './Bullet';

function TextSpecialist() {

    const [speci, setSpeci] = useState('');

    const { bullet } = useContext(DataContext);

    useEffect(() => {

        setSpeci(bullet == 1 ? 'block' : 'none');

    }, [bullet])

    return (
        <div className='text-crew' style={{ display: speci, }}>
            <section className='pilot-crew'>
                <div className='pilot-text'>
                    <h3>MISSION SPECIALIST</h3>
                    <h2>MARK SHUTTLEWORTH</h2>

                    <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
                </div>

                <Bullet />

            </section>
        </div>
    );
}

export default TextSpecialist;