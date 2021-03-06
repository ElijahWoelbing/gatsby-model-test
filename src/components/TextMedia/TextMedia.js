import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { textMedia, textMediaText, textMediaHeader, textMediaBody, textMediaImage } from './TextMedia.module.scss';
export default function TextMedia({ data }) {
    return (
        <div className={textMedia}>
            <div className={textMediaText}>
                <h2 className={textMediaHeader}>{data.header}</h2>
                <p className={textMediaBody}>{data.body.body}</p>
            </div>
            <div className={textMediaImage}>
                <GatsbyImage image={getImage(data.image)} alt='' />
            </div>
        </div>
    );
}


export const query = graphql`
fragment TextMediaData on ContentfulBlockTextMedia {
    internal {
      type
    }
    header
    body {
      body
    }
    image {
      gatsbyImageData(width: 500)
    }
  }
`;