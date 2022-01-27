import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/hero'
import TextMedia from '../components/TextMedia'
import CaseStudy from '../components/CaseStudy'
import { useStaticQuery, graphql } from "gatsby"

function renderBlock(block) {
  switch (block.internal.type) {
    case 'ContentfulBlockHero':
      return <Hero data={block} />
    case 'ContentfulBlockTextMedia':
      return <TextMedia data={block} />
    case 'ContentfulBlockCaseStudy':
      return <CaseStudy data={block} />
    default:
      return <p>component not found</p>

  }

}

const Page = function ({ data }) {

  console.log(data);
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
        image {
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