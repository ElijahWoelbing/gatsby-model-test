import React from 'react';
import { hero, heroHeader } from './Hero.module.scss';
export default function Hero({ data }) {
  return (

    <div className={hero} style={{
      backgroundImage: `url(${data.backgroundImage.file.url})`,
      backgroundSize: 'cover'
    }}>
      <h1 className={heroHeader}>{data.header}</h1>
    </div>
  )
}
