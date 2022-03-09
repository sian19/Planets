import React, { useContext, useState, useEffect } from 'react';

import { DataContext } from '../contexApi/AuthContext';

function TextCapsule() {

    const { ball } = useContext(DataContext);

    const [capsule, setCapsule] = useState('');

    useEffect(() => {

        setCapsule(ball == 2 ? 'block' : 'none');

    }, [ball]);

    return (
        <div className='text-tech' style={{ display: capsule }}>
            <h3>THE TERMINOLOGY...</h3>
            <h2>SPACE CAPSULE</h2>

            <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
        </div>
    )
}

export default TextCapsule;