import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import { graphql } from "gatsby"

const IndexPage = function ({data}) {
  const heroData = data.contentfulPageHome.hero;

  return (
    <Layout>
      <Hero data={heroData} />
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
        ctaText
        headline
      }
    }
  }
`

export default IndexPage;