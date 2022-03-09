import React, { useContext, useState, useEffect } from 'react';

import { DataContext } from '../contexApi/AuthContext';

function TextSpaceport() {

    const { ball } = useContext(DataContext);

    const [spaceport, setSpaceport] = useState('');

    useEffect(() => {

        setSpaceport(ball == 1 ? 'block' : 'none');

    }, [ball])

    return (
        <div className='text-tech' style={{ display: spaceport }}>
            <h3>THE TERMINOLOGY...</h3>
            <h2>SPACEPORT</h2>

            <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
        </div>
    );
}

export default TextSpaceport;