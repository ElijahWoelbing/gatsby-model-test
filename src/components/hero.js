import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'
import { hero, heroHeader } from './hero.module.scss'
export default function Hero({ data }) {
  const image = getImage(data.image);
  const bgImage = convertToBgImage(image);
  return (
    <BackgroundImage
      Tag="section"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      {...bgImage}
      preserveStackingContext
    >
      <div className={hero}>
        <h1 className={heroHeader}>{data.header}</h1>
      </div>
    </BackgroundImage>
  )
}
