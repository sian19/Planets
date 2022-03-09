import React, { useContext, useState, useEffect } from 'react';

import { DataContext } from '../contexApi/AuthContext';

function TextVehicle() {

    const { ball } = useContext(DataContext);

    const [vehicle, setVehicle] = useState('');

    useEffect(() => {

        setVehicle(ball == 0 ? ' block' : 'none');

    }, [ball])

    return (
        <div className='text-tech' style={{ display: vehicle }}>
            <h3>THE TERMINOLOGY...</h3>
            <h2>LAUNCH VEHICLE</h2>

            <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
        </div>
    )
}

export default TextVehicle;