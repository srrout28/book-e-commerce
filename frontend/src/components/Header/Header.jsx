import React from 'react';
import './header.css';
import Carousal from '../carousal/Carousal';

// Header CSS
function Header() {
    return (
        <>
            <div className='header' id='header'>
               <Carousal/>
                   
            </div>
        </>
    )
}

export default Header;