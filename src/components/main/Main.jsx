
import React from 'react';

import Home from '../home/Home';
import Destination from '../destination/Destination';
import Crew from '../crew/Crew';
import Tech from '../technology/Tech';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './main.css';

import Header from '../header/Header';

function Main() {

    return (
        <main >



            <Router>

                <Header />

                <Routes>
                    <Route path="/home" element={<Home />}></Route>

                    <Route path="/" element={<Home />}></Route>

                    <Route path="/destination" element={<Destination />}></Route>

                    <Route path="/crew" element={<Crew />} />

                    <Route path='/technology' element={<Tech />} />
                </Routes>

            </Router>


        </main >
    )
}

export default Main;