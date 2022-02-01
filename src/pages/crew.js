import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import Avatar from '../components/Avatar';
import { Link, graphql } from 'gatsby';
import { renderBlock } from '../scripts/render';
import {crewMembers, crewMember} from './crew.module.scss';
const CrewPage = function ({ data }) {
  const { blocks } = data.contentfulPageCrew;
  const { hero } = data.contentfulPageCrew;
  const { persons } = data.contentfulPageCrew;
  return (
    <Layout>
      <Seo title='Crew Page' />
      <Hero data={hero} />
      {persons &&
        <div className={crewMembers}>
          {
            persons.map((person, i) => {
              return (
                <div key={i} className={crewMember}> 
                  <Link to={`${person.firstName}-${person.lastName}`.toLowerCase()} >
                    <Avatar data={person} />
                  </Link>
                </div>
              )
            })
          }
        </div>
      }
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
    contentfulPageCrew {
      hero {
        backgroundImage {
          file {
            url
          }
        }
        header
      }
      persons {
        headshot {
          gatsbyImageData
        }
        firstName
        lastName
        jobTitle
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

export default CrewPage;