import React from 'react'
import { hero, heroMain, heroImage, heroHeader, heroText, heroButton } from './hero.module.scss'
export default function Hero() {
    return (
        <div className={hero}>
            <div className={heroMain}>
                <h1 className={heroHeader}></h1>
                <p className={heroText}></p>
                <button className={heroButton}></button>
            </div>
            <div className={heroImage}>
                
            </div>
        </div>
    )
}
