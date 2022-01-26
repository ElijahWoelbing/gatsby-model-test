import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import BackgroundImage from 'gatsby-background-image'
import Layout from '../components/Layout'
import { hero, heroText, heroName, heroJob, info, infoHeader, infoBio, infoEmail } from './person.module.scss'

export default function person({ pageContext }) {


  const image = getImage(pageContext.image);
  const bgImage = convertToBgImage(image);
  return (
    <Layout>
      <div>
        <BackgroundImage
          Tag='section'
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
          }}
          {...bgImage}
          preserveStackingContext
        >
          <div className={hero}>
            <div className={heroText}>
              <h2 className={heroName}>{pageContext.name}</h2>
              <div className={heroJob}>{pageContext.jobTitle}</div>
            </div>
          </div>
        </BackgroundImage>
        <div className={info}>
          <h2 className={infoHeader}>{pageContext.header}</h2>
          <div className={infoBio}>{renderRichText(pageContext.bio)}</div>
          <div className={infoEmail} >{pageContext.emailAddress}</div>
        </div>
      </div>
    </Layout>

  )
}
