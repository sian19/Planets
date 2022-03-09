import React, { useContext, useState, useEffect } from 'react';

import { DataContext } from '../contexApi/AuthContext';

function Selector() {

    const [colorB1, setColorB1] = useState('');
    const [colorNum1, setColorNum1] = useState('');
    const [colorBorder1, setColorBorder1] = useState('');

    const [colorB2, setColorB2] = useState('');
    const [colorNum2, setColorNum2] = useState('');
    const [colorBorder2, setColorBorder2] = useState('');

    const [colorB3, setColorB3] = useState('');
    const [colorNum3, setColorNum3] = useState('');
    const [colorBorder3, setColorBorder3] = useState('');

    const { ball, insertBall } = useContext(DataContext);

    useEffect(() => {

        setColorB1(ball == 0 ? 'white' : 'transparent');
        setColorBorder1(ball == 0 ? '0' : '1px solid rgba(255, 255, 255, 0.2');
        setColorNum1(ball == 0 ? 'black' : 'white');

        setColorB2(ball == 1 ? 'white' : 'transparent');
        setColorBorder2(ball == 1 ? '0' : '1px solid rgba(255, 255, 255, 0.2)');
        setColorNum2(ball == 1 ? 'black' : 'white');

        setColorB3(ball == 2 ? 'white' : 'transparent');
        setColorBorder3(ball == 2 ? '0' : '1px solid rgba(255, 255, 255, 0.2');
        setColorNum3(ball == 2 ? 'black' : 'white');

    }, [ball])

    return (
        <div className='selector'>
            <div className='ball-cursor' onMouseOver={() => {

                setColorB1('transparent');
                setColorNum1('white');
                setColorBorder1('1px solid white');
            }}

                onMouseOut={() => {

                    if (ball == 0) {
                        setColorB1('white');
                        setColorNum1('black');
                        setColorBorder1('0');
                    }

                    else {
                        setColorB1('0');
                        setColorNum1('white');
                        setColorBorder1('1px solid rgba(255, 255, 255, 0.2)');
                    }

                }}

                style={{
                    backgroundColor: colorB1,
                    color: colorNum1,
                    border: colorBorder1,
                }}

                onClick={() => {

                    insertBall(0);

                }}

            >1</div>

            <div className='ball-cursor' onMouseOver={() => {

                setColorB2('transparent');
                setColorBorder2('1px solid white');
                setColorNum2('white');

            }}

                onMouseOut={() => {

                    if (ball == 1) {
                        setColorB2('white');
                        setColorBorder2('0');
                        setColorNum2('black');
                    }

                    else {
                        setColorB2('transparent');
                        setColorBorder2('1px solid rgba(255, 255, 255, 0.2)');
                        setColorNum2('white');
                    }

                }}

                style={{
                    backgroundColor: colorB2,
                    color: colorNum2,
                    border: colorBorder2,
                }}

                onClick={() => {

                    insertBall(1);

                }}

            >2</div>

            <div className='ball-cursor' onMouseOver={() => {

                setColorB3('transparent');
                setColorBorder3('1px solid white');
                setColorNum3('white');

            }}

                onMouseOut={() => {

                    if (ball == 2) {
                        setColorB3('white');
                        setColorBorder3('0');
                        setColorNum3('black');
                    }

                    else {
                        setColorB3('transparent');
                        setColorBorder3('1px solid rgba(255, 255, 255, 0.2)');
                        setColorNum3('white');
                    }

                }}

                style={{
                    backgroundColor: colorB3,
                    color: colorNum3,
                    border: colorBorder3,
                }}

                onClick={() => {

                    insertBall(2);

                }}

            >3</div>
        </div >
    );
}

export default Selector;