import * as React from 'react'
import { graphql } from 'gatsby'
import { renderBlock } from '../scripts/render'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import SEO from '../components/SEO'

const IndexPage = function ({ data }) {
  const { blocks } = data.contentfulPageHome;
  const { hero } = data.contentfulPageHome;
  return (
    <Layout>
      <SEO title='Home Page' />
      <Hero data={hero} />
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
  {
    contentfulPageHome {
      hero {
        backgroundImage {
          gatsbyImageData
        }
        header
      }
      blocks {
        ... on ContentfulBlockCaseStudy {
          backgroundImage {
            gatsbyImageData
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

