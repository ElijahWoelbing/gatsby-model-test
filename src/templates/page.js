import React from 'react'
import Layout from '../components/Layout'
import { useStaticQuery, graphql } from 'gatsby'
import { renderBlock } from '../scripts/render'



const Page = function ({ data }) {
  const blocks = data.contentfulPage.blocks;
  console.log(blocks);
  return (
    <Layout>
      {blocks.map((block, i) => {
        return (
          <div key={i}>
            {renderBlock(block)}
          </div>
        )
      })}
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
          gatsbyImageData
        }
        header
      }
      ... on ContentfulBlockHero {
        internal {
          type
        }
        header
        backgroundImage {
          gatsbyImageData
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