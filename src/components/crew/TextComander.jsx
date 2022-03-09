import React, { useState, useContext, useEffect } from 'react';

import { DataContext } from '../contexApi/AuthContext';

import Bullet from './Bullet';

function TextComander() {

    const [comander, setComander] = useState('');

    const { bullet } = useContext(DataContext);

    useEffect(() => {

        setComander(bullet == 0 ? 'block' : 'none');

    }, [bullet])

    return (
        <div className='text-crew' style={{ display: comander, }}>
            <section className='pilot-crew'>
                <div className='pilot-text'>
                    <h3>COMMANDER</h3>
                    <h2>DOUGLAS HURLEY</h2>

                    <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                </div>

                <Bullet />

            </section>
        </div>
    )
}

export default TextComander;