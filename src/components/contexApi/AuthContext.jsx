import React, { createContext, useState } from 'react';

export const DataContext = createContext();


export function AuthProvider(props) {

    const [bullet, setBullet] = useState(0);
    const [count, setCount] = useState(0);
    const [countX, setCountX] = useState(0);
    const [ball, setBall] = useState(0);

    const insertBall = (value) => {
        setBall(value)
    }

    const insertCount = (value) => {
        setCount(value)
    }

    const insertCountX = (value) => {
        setCountX(value);
    }

    const insertBullet = (value) => {

        setBullet(value);

    }

    return (
        <DataContext.Provider value={{
            bullet,
            insertBullet,
            count,
            insertCount,
            countX,
            insertCountX,
            ball,
            insertBall,
        }}>

            {
                props.children}

        </DataContext.Provider>
    )
}