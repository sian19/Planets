import React, { useState, useEffect, useContext } from 'react';

import { DataContext } from '../contexApi/AuthContext';

import './nav-planet.css';

function NavPlanet() {

    const { countX, insertCountX } = useContext(DataContext);

    const [colorMo, setColorMo] = useState('');
    const [colorMa, setColorMa] = useState('');
    const [colorEu, setColorEu] = useState('');
    const [colorTi, setColorTi] = useState('');

    useEffect(() => {

        setColorMo(countX == 0 ? '2px solid white' : '0');
        setColorMa(countX == 1 ? '2px solid white' : '0');
        setColorEu(countX == 2 ? '2px solid white' : '0');
        setColorTi(countX == 3 ? '2px solid white' : '0');

    }, [countX]);

    return (
        <div className='nav'>
            <nav>
                <ul>
                    <li onMouseOver={() => {

                        setColorMo('2px solid rgba(255, 255, 255, 0.5');

                    }} style={{
                        borderBottom: colorMo,
                    }} onMouseOut={() => {

                        if (countX == 0) {
                            setColorMo('2px solid white');
                        }

                        else {
                            setColorMo('0');
                        }

                    }}><a onClick={() => {

                        insertCountX(0);

                    }}>MOON</a></li>



                    <li onMouseOver={() => {

                        setColorMa('2px solid rgba(255, 255, 255, 0.5');

                    }} style={{
                        borderBottom: colorMa,
                    }} onMouseOut={() => {

                        if (countX == 1) {
                            setColorMa('2px solid white');
                        }

                        else {
                            setColorMa('0');
                        }

                    }} onClick={() => {

                        insertCountX(1);

                    }}><a href="#">MARS</a></li>



                    <li onMouseOver={() => {

                        setColorEu('2px solid rgba(255, 255, 255, 0.5');

                    }} style={{
                        borderBottom: colorEu,
                    }} onMouseOut={() => {

                        if (countX == 2) {
                            setColorEu('2px solid white');
                        }

                        else {
                            setColorEu('0');
                        }

                    }} onClick={() => {

                        insertCountX(2);

                    }}><a href="#">EUROPA</a></li>



                    <li onMouseOver={() => {

                        setColorTi('2px solid rgba(255, 255, 255, 0.5');

                    }} style={{
                        borderBottom: colorTi,
                    }} onMouseOut={() => {

                        if (countX == 3) {
                            setColorTi('2px solid white');
                        }

                        else {
                            setColorTi('0');
                        }

                    }} onClick={() => {

                        insertCountX(3);

                    }}><a href="#">TITAN</a></li>
                </ul>

            </nav>



        </div>
    )
}

export default NavPlanet;