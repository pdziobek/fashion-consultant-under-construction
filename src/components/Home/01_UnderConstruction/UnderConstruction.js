import React from 'react';
import logo from '../../../assets/logo-jp.png';
import './style.scss';
import UnderConstructionAnimation from "./Animation/UnderConstructionAnimation";
import Authors from "../02_Footer/Authors";

export default function UnderConstruction() {

    return(
        <>
                <section className="construction-container">

                    <div className='logo-container'>
                    <img src={logo} className="App-logo" id="logo-animation" alt="logo" />
                    </div>
                    <UnderConstructionAnimation/>
                    <p className='construction-txt' id='construction-txt-animation'>Strona w budowie</p>
                    <Authors className='authors'/>

                </section>
        </>
    )
}
