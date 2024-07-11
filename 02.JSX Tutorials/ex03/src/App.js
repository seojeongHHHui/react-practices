import React from 'react';
import Header from './Header';
import Contents from './Contents';

function App() {
    return (
        <div>
            <Header />
            <Contents />
        </div>
    );
}

// createElement('div', null, Header());

export {App};