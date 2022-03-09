import React, { useState, useContext, useEffect } from 'react';

import { DataContext } from '../contexApi/AuthContext';

import Bullet from './Bullet';

function TextEngineer() {

    const [engineer, setEngineer] = useState('');

    const { bullet } = useContext(DataContext);

    useEffect(() => {

        setEngineer(bullet == 3 ? 'block' : 'none');

    }, [bullet])

    return (
        <div className='text-crew' style={{ display: engineer, }}>
            <section className='pilot-crew'>
                <div className='pilot-text'>
                    <h3>FLIGHT ENGINEER</h3>
                    <h2>ANOUSHEH ANSARI</h2>

                    <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>
                </div>

                <Bullet />

            </section>
        </div>
    );
}

export default TextEngineer;