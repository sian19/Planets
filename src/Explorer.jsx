import React from 'react';

import './Style/global.css';

import { AuthProvider } from './components/contexApi/AuthContext';

import Main from './components/main/Main';

function Explorer() {
    return (

        <>
            <AuthProvider >
                <Main></Main>
            </AuthProvider>
        </>

    );
}

export default Explorer;