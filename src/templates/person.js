import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { hero, heroText, heroName, info, infoHeader, infoBio, infoEmail } from './person.module.scss'

const PersonPage = function ({ data }) {
    const { person } = data.contentfulPagePerson;
    return (
        <Layout>
            <div className={hero} style={{
                backgroundImage: `url(${person.banner.file.url})`,
                backgroundSize: 'cover'
            }}>
                <div className={heroText}>
                    <h2 className={heroName}>{person.firstName + " " + person.lastName}</h2>
                    <div >{person.jobTitle}</div>
                </div>
            </div>
            <div className={info}>
                <h2 className={infoHeader}>{person.header}</h2>
                <div className={infoBio}>{renderRichText(person.bio)}</div>
                <div className={infoEmail} >{person.emailAddress}</div>
            </div>
        </Layout>
    )
}

export const query = graphql`
query pagePersons($slug: String) {
    contentfulPagePerson(slug: {eq: $slug}) {
      person {
        banner {
          file {
            url
          }
        }
        bio {
          raw
        }
        firstName
        emailAddress
        header
        lastName
        jobTitle
      }
    }
}
`
export default PersonPage;