import React from 'react';
import logo from '../../assets/logo-jp.png';
import './style.scss';
import UnderConstructionAnimation from "./Animation/UnderConstructionAnimation";

export default function UnderConstruction() {

    return(
        <>
                <header className="construction-container">
                    <div className='logo-container'>
                    <img src={logo} className="App-logo" id="logo-animation" alt="logo" />
                    </div>
                    <UnderConstructionAnimation/>
                    <p className='construction-txt'>Strona w budowie</p>


                </header>
        </>
    )
}
