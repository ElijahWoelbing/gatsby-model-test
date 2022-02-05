import React from 'react';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { headerText, header, body } from './HeaderText.module.scss'
export default function HeaderText({ data }) {
    return (
        <div className={headerText}>
            <h2 className={header}>{data.header}</h2>
            <div className={body}>{renderRichText(data.body)}</div>
        </div>
    )
}


export const query = graphql`
fragment HeaderTextData on ContentfulBlockHeaderText {
    internal {
      type
    }
    header
    body {
        raw
      }
  }
`;