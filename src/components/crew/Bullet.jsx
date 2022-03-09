import React, { useContext, useState, useEffect } from 'react';

import { DataContext } from '../contexApi/AuthContext';

function Bullet() {

    const { bullet, insertBullet } = useContext(DataContext);

    const [ball1, setBall1] = useState('');
    const [ball2, setBall2] = useState('');
    const [ball3, setBall3] = useState('');
    const [ball4, setBall4] = useState('');

    useEffect(() => {

        setBall1(bullet == 0 ? '1' : '0.17');
        setBall2(bullet == 1 ? '1' : '0.17');
        setBall3(bullet == 2 ? '1' : '0.17');
        setBall4(bullet == 3 ? '1' : '0.17');

    }, [bullet])

    return (
        <div className='bullet'>
            <span onMouseOver={() => {

                setBall1('0.5');

            }} style={{
                opacity: ball1,
            }}

                onMouseOut={() => {

                    setBall1(bullet == 0 ? '1' : '0.17')

                }}

                onClick={() => {
                    insertBullet(0)
                }}

            ></span>

            <span onMouseOver={() => {

                setBall2('0.5');

            }}

                onMouseOut={() => {

                    setBall2(bullet == 1 ? '1' : '0.17');

                }}

                style={{ opacity: ball2 }}

                onClick={() => {
                    insertBullet(1);
                }}

            ></span>

            <span

                onMouseOver={() => {

                    setBall3('0.5');

                }}

                onMouseOut={() => {
                    setBall3(bullet == 2 ? '1' : '0.17')
                }}

                style={{ opacity: ball3 }}

                onClick={() => {
                    insertBullet(2)
                }}

            ></span>

            <span

                onMouseOver={() => {

                    setBall4('0.5')

                }}

                onMouseOut={() => {

                    setBall4(bullet == 3 ? '1' : '0.17');

                }}

                style={{ opacity: ball4 }}

                onClick={() => {
                    insertBullet(3);
                }}

            ></span>
        </div>
    )
}

export default Bullet;