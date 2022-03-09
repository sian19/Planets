import React, { useContext, useState, useEffect } from 'react';

import { DataContext } from '../contexApi/AuthContext';

function TextTitan() {

    const [titan, setTitan] = useState('');

    const { countX } = useContext(DataContext);

    useEffect(() => {

        setTitan(countX == 3 ? 'block' : 'none');

    }, [countX])

    return (
        <div className='text moon' style={{ display: titan }}>
            <h1>TITAN</h1>

            <p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>

            <div className='retangle'></div>

            <article>

                <div className='distance'>
                    <p>AVG. DISTANCE</p>
                    <h3>1.6 BIL. KM</h3>
                </div>

                <div className='days'>
                    <p>EST. TRAVEL TIME</p>
                    <h3>7 YEARS</h3>
                </div>

            </article>
        </div>
    );
}

export default TextTitan;