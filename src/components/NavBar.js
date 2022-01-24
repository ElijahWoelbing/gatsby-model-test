import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import { nav, navItem } from "./NavBar.module.scss"
export default function NavBar() {
  const data = useStaticQuery(graphql`
  {
    contentfulNavigationMenu(title: {eq: "Layout Nav"}) {
      id
      navigationLink {
        url
        title
      }
    }
  }
  `)

  console.log(data.contentfulNavigationMenu);
  return (
    <div className={nav}>
      {data.contentfulNavigationMenu.navigationLink.map((link) => {
        return <Link className={navItem} to={link.url}>{link.title}</Link>
      })}
    </div>
  )
}

