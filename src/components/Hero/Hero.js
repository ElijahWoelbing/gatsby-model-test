import React from 'react';
import { graphql } from 'gatsby';
import { hero, heroHeader } from './Hero.module.scss';
export default function Hero({ data }) {
  return (
    <div className={hero} style={{
      backgroundImage: `url(${data.backgroundImage.file.url})`,
      backgroundSize: 'cover'
    }}>
      <h1 className={heroHeader} style={{
        textAlign: data.headerAlignment,
        color: data.headerColor
      }}>{data.header}</h1>
    </div>
  )
}

export const query = graphql`
fragment HeroData on ContentfulBlockHero {
  internal {
    type
  }
  header
  headerAlignment
  headerColor
  backgroundImage {
    file {
      url
    }
  }
}
`;