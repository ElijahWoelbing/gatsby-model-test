import React from 'react';
import { graphql } from 'gatsby';
import { renderBlock } from '../scripts/render';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Hero from '../components/Hero';

const IndexPage = function ({ data }) {
  const { blocks } = data.contentfulPageHome;
  const { hero } = data.contentfulPageHome;
  return (
    <Layout>
      <Seo title='Home Page' />
      <Hero data={hero} />
      {blocks &&
        <div>
          {blocks.map((block, i) => {
            return (
              <div key={i}>
                {renderBlock(block)}
              </div>
            )
          })}
        </div>
      }

    </Layout>
  )
}

export const query = graphql`
  {
    contentfulPageHome {
      hero {
        backgroundImage {
          file {
            url
          }
        }
        header
        headerAlignment
      }
      blocks {
        ... on ContentfulBlockCaseStudy {
          backgroundImage {
            file {
              url
            }
          }
          body {
            body
          }
          header
          internal {
            type
          }
        }
        ... on ContentfulBlockTextMedia {
          header
          image {
            gatsbyImageData(width:500)
          }
          body {
            body
          }
          internal {
            type
          }
        }
      }
    }
  }
`
export default IndexPage;

