import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { footer, footerLink } from './Footer.module.scss';
export default function Footer() {
  const data = useStaticQuery(graphql`
    {
      contentfulBlockFooter(contentful_id: {eq: "PMxfksvnKRWxQwigFeBqn"}) {
        navigationLinks {
          linkText
          url
        }
      }
    }
  `);

  return (
    <div className={footer}>
      {data.contentfulBlockFooter.navigationLinks.map((link, i) => {
        return <Link className={footerLink} to={link.url} key={i}>{link.linkText}</Link>
      })}
    </div>
  )
}

