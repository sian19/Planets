import React, { useState, useContext, useEffect } from 'react';

import { DataContext } from '../contexApi/AuthContext';

import './text.css';

function TextMoon() {

    const [moon, setMoon] = useState('none');

    const { countX } = useContext(DataContext);

    useEffect(() => {

        setMoon(countX == 0 ? 'block' : 'none');

    }, [countX])

    return (
        <div className='text moon' style={{ display: moon }}>
            <h1>MOON</h1>

            <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>

            <div className='retangle'></div>

            <article>

                <div className='distance'>
                    <p>AVG. DISTANCE</p>
                    <h3>384,400 KM</h3>
                </div>

                <div className='days'>
                    <p>EST. TRAVEL TIME</p>
                    <h3>3 DAYS</h3>
                </div>

            </article>
        </div>
    );
}

export default TextMoon;