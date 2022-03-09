import React, { useState, useEffect, useContext } from 'react';

import './menu-mobile.css';

import { Link } from 'react-router-dom';

import { DataContext } from '../contexApi/AuthContext';

function MenuMob() {

    const [borderHome, setBorderHome] = useState('0');
    const [borderDesti, setBorderDesti] = useState('0');
    const [borderCrew, setBorderCrew] = useState('0');
    const [borderTech, setBorderTech] = useState('0');

    const { count, insertCount } = useContext(DataContext);

    const [show, setShow] = useState(false);

    const [left, setLeft] = useState('');


    useEffect(() => {

        setBorderHome(count == 0 ? '4px solid white' : '0');
        setBorderDesti(count == 1 ? '4px solid white' : '0');
        setBorderCrew(count == 2 ? '4px solid white' : '0');
        setBorderTech(count == 3 ? '4px solid white' : '0');

    }, [count])


    function open() {
        setShow(!show);
    }

    useEffect(() => {
        if (show) {
            setLeft('30%');
        }

        else {
            setLeft("-100%");
        }
    }, [show])

    return (
        <>
            <div className='menu-mobile' onClick={open}>
                <input type="checkbox" id='check' />
                <label htmlFor='check'>

                    <span></span>
                    <span></span>
                    <span></span>

                </label>
            </div>




            <nav className='menu-mob' style={{ left: left }}>
                <ul>
                    <li style={{
                        borderRight: borderHome,
                    }}><Link to="/home" onClick={() => {

                        insertCount(0);

                    }}><p>00  </p> HOME</Link></li>

                    <li style={{
                        borderRight: borderDesti,
                    }}><Link to="/destination" onClick={() => {

                        insertCount(1);

                    }}><p>01  </p> DESTINATION</Link></li>

                    <li style={{
                        borderRight: borderCrew,
                    }}><Link to="/crew" onClick={() => {

                        insertCount(2);

                    }}><p>02  </p> CREW</Link></li>

                    <li style={{
                        borderRight: borderTech,
                    }}><Link to='/technology' onClick={() => {

                        insertCount(3);

                    }}><p>03  </p> TECHNOLOGY</Link></li>
                </ul>
            </nav>

        </>
    )
}

export default MenuMob;