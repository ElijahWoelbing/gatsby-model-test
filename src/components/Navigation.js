import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { nav, navItem } from './Navigation.module.scss';
export default function Navigation() {
  const data = useStaticQuery(graphql`
    {
      contentfulBlockNavigation(contentful_id: {eq: "2svumzaCuEtPRYHFmSWdf1"}) {
        navigationLinks {
          url
          linkText
        }
      }
    }
  `)

  return (
    <div className={nav}>
      {data.contentfulBlockNavigation.navigationLinks.map((link, i) => {
        return <Link className={navItem} to={link.url} key={i}>{link.linkText}</Link>
      })}
    </div>
  )
}

