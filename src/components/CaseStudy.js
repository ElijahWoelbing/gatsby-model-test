import React from 'react';
import { getImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'
import { caseStudy, cardContainer, card, cardHeader, cardBody } from './CaseStudy.module.scss'
export default function CaseStudy({ data }) {
  const image = getImage(data.backgroundImage);
  const bgImage = convertToBgImage(image);
  return (
    <BackgroundImage
      Tag='section'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      {...bgImage}
      preserveStackingContext
    >
      <div className={caseStudy}>
        <div className={cardContainer}>
          <div className={card}>
            <h2 className={cardHeader}>{data.header}</h2>
            <p className={cardBody}>{data.body.body}</p>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
}
