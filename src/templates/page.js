import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { renderBlock } from '../scripts/render';


const Page = function ({ data }) {
  const blocks = data.contentfulPage.blocks;
  return (
    <Layout>
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
query pageBlocks($slug: String) {
  contentfulPage(slug: {eq: $slug}) {
    blocks {
      ... on ContentfulBlockCaseStudy {
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
      ... on ContentfulBlockHero {
        internal {
          type
        }
        header
        backgroundImage {
          file {
            url
          }
        }
      }
      ... on ContentfulBlockTextMedia {
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
    }
  }
}
`

export default Page;