import React, { useState, useEffect, useContext } from 'react';

import { DataContext } from '../contexApi/AuthContext';

import './header.css';

import MenuMob from '../menu-mobile/MenuMob';

import { Link } from 'react-router-dom';


function Header() {

    const [borderHome, setBorderHome] = useState('0');
    const [borderDesti, setBorderDesti] = useState('0');
    const [borderCrew, setBorderCrew] = useState('0');
    const [borderTech, setBorderTech] = useState('0');

    const { count, insertCount } = useContext(DataContext);

    useEffect(() => {

        let saved = localStorage.getItem('save');

        if (saved == null) {
            saved = 0;
        }

        insertCount(saved);

    }, [])


    useEffect(() => {

        localStorage.setItem('save', count);

    }, [count])



    useEffect(() => {

        setBorderHome(count == 0 ? '3px solid white' : '0');
        setBorderDesti(count == 1 ? '3px solid white' : '0');
        setBorderCrew(count == 2 ? '3px solid white' : '0');
        setBorderTech(count == 3 ? '3px solid white' : '0');

    }, [count])

    return (

        <header>
            <div className='group-3'>
                <div className='logo'></div>

                <div className='rectangle'></div>

                <nav className='menu-desktop'>
                    <ul>
                        <li style={{
                            borderBottom: borderHome,
                        }} ><Link to='/home' onClick={() => {

                            insertCount(0);

                        }} onMouseOver={() => {

                            setBorderHome('3px solid rgba(255, 255, 255, 0.5');


                        }}

                            onMouseOut={() => {
                                if (count == 0) {
                                    setBorderHome('3px solid white');
                                }

                                else {
                                    setBorderHome('0');
                                }


                            }}><p>00</p> HOME</Link></li>

                        <li style={{ borderBottom: borderDesti, }} onMouseOver={() => {

                            setBorderDesti('3px solid rgba(255, 255, 255, 0.5');

                        }} onMouseOut={() => {

                            if (count == 1) {
                                setBorderDesti('3px solid white');
                            }

                            else {
                                setBorderDesti('0');
                            }

                        }}><Link to="/destination"
                            onClick={() => {

                                insertCount(1);

                            }}><p>01</p> DESTINATION</Link></li>

                        <li style={{
                            borderBottom: borderCrew,
                        }}><Link to="/crew" onMouseOver={() => {

                            setBorderCrew('3px solid rgba(255, 255, 255, 0.5');

                        }} onMouseOut={() => {

                            if (count == 2) {
                                setBorderCrew('3px solid white');
                            }

                            else {
                                setBorderCrew('0');
                            }

                        }} onClick={() => {

                            insertCount(2);

                        }}><p>02</p> CREW</Link></li>

                        <li style={{
                            borderBottom: borderTech,
                        }}><Link to='/technology' onMouseOver={() => {

                            setBorderTech('3px solid rgba(255, 255, 255, 0.5');

                        }} onMouseOut={() => {

                            if (count == 3) {
                                setBorderTech('3px solid white');
                            }

                            else {
                                setBorderTech('0');
                            }

                        }} onClick={() => {

                            insertCount(3);

                        }}><p>03</p> TECHNOLOGY</Link></li>
                    </ul>
                </nav>

                <MenuMob />

            </div>
        </header >

    );
}

export default Header;