import React from 'react';
import './style.scss';

export default function UnderConstructionAnimation() {

    return (
        <>
            <div className="box">
                <div className="container">
                    <div className="cube">
                        <div className="half1">
                            <div className="part part1"></div>
                            <div className="part part2"></div>
                            <div className="part part5"></div>
                        </div>
                        <div className="half2">
                            <div className="part part3"></div>
                            <div className="part part4"></div>
                            <div className="part part6"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}