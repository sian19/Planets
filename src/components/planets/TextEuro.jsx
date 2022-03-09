import React, { useContext, useState, useEffect } from 'react';

import { DataContext } from '../contexApi/AuthContext';

function TextEuro() {

    const [euro, setEuro] = useState('');

    const { countX } = useContext(DataContext);

    useEffect(() => {

        setEuro(countX == 2 ? 'block' : 'none');

    }, [countX])

    return (
        <div className='text euro' style={{ display: euro }}>
            <h1>EUROPA</h1>

            <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>

            <div className='retangle'></div>

            <article>

                <div className='distance'>
                    <p>AVG. DISTANCE</p>
                    <h3>628 MIL. KM</h3>
                </div>

                <div className='days'>
                    <p>EST. TRAVEL TIME</p>
                    <h3>3 YEARS</h3>
                </div>

            </article>
        </div>
    );
}

export default TextEuro;