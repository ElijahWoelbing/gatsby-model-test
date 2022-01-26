import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Avatar from '../components/Avatar'
import { people } from './crew.module.scss'
const CrewPage = function ({ data }) {
  const heroData = data.contentfulPageCrew.hero;
  const avatars = data.allContentfulPerson.nodes;
  return (
    <Layout>
      <Hero data={heroData} />
      <div className={people}>
        {avatars.map((avatarData, i) => {
          return <a href={`crew/${avatarData.slug}`} key={i}><Avatar data={avatarData} /></a>
        })}
      </div>
    </Layout>
  )
}


export const query = graphql`
  {
    contentfulPageCrew {
      hero {
        backgroundImage {
          gatsbyImageData
        }
        headline
        ctaText
      }
    }
    allContentfulPerson {
      nodes {
        avatar {
          gatsbyImageData(width: 300)
        }
        jobTitle
        name
        slug
      }
    }
  }
`
export default CrewPage;