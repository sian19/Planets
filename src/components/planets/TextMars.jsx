import React, { useState, useContext, useEffect } from 'react';

import { DataContext } from '../contexApi/AuthContext';

function TextMars() {

    const [mars, setMars] = useState('');

    const { countX } = useContext(DataContext);

    useEffect(() => {

        setMars(countX == 1 ? 'block' : 'none');

    }, [countX])

    return (
        <div className='text mars' style={{ display: mars }}>
            <h1>MARS</h1>

            <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>

            <div className='retangle'></div>

            <article>

                <div className='distance'>
                    <p>AVG. DISTANCE</p>
                    <h3>225 MIL. KM</h3>
                </div>

                <div className='days'>
                    <p>EST. TRAVEL TIME</p>
                    <h3>9 MONTHS</h3>
                </div>

            </article>
        </div>
    )
}

export default TextMars;