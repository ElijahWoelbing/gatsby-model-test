import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Avatar from '../components/Avatar'
import { avatars, avatar } from './crew.module.scss'
const CrewPage = function ({ data }) {
  const heroData = data.contentfulPageCrew.hero;
  const people = data.allContentfulPerson.nodes;
  return (
    <Layout>
      <Hero data={heroData} />
      <div className={avatars}>
        {people.map((person, i) => {
          return <a className={avatar} href={`crew/${person.slug}`} key={i}><Avatar data={person} /></a>
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