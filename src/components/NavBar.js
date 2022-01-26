import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import { nav, navItem } from "./NavBar.module.scss"
export default function NavBar() {
  const data = useStaticQuery(graphql`
    {
      contentfulNavigationMenu {
        navigationLink {
          url
          linkText
        }
      }
    }
  `)

  return (
    <div className={nav}>
      {data.contentfulNavigationMenu.navigationLink.map((link, i) => {
        return <Link className={navItem} to={link.url} key={i}>{link.linkText}</Link>
      })}
    </div>
  )
}

