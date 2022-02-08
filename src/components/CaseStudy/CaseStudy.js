import React from 'react';
import { graphql } from 'gatsby';
import { caseStudy, cardContainer, card, cardHeader, cardBody } from './CaseStudy.module.scss';
export default function CaseStudy({ data }) {
  return (
    <div className={caseStudy} style={{
      backgroundImage: `url(${data.backgroundImage.file.url})`,
      backgroundSize: 'cover'
    }}>
      <div className={cardContainer}>
        <div className={card}>
          <h2 className={cardHeader}>{data.header}</h2>
          <p className={cardBody}>{data.body.body}</p>
        </div>
      </div>
    </div>
  );
}

export const query = graphql`
fragment CaseStudyData on ContentfulBlockCaseStudy {
  internal {
    type
  }
  body {
    body
  }
  backgroundImage {
    file {
      url
    }
  }
  header
}
`;



