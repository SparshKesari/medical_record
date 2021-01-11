import React from 'react';
import Header from '../Component/Header';
import '../Css/Header.css';
import Navigation from '../Component/Navigation';

function Landing_Page() {
    return (
        <>
            <Navigation />
            <div className="landing_page">
                <Header/>   
            </div>
        </>
    )
}

export default Landing_Page;
