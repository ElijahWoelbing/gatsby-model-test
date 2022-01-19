import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import {nav, navItem} from "./nav-bar.module.scss"
export default function NavBar() {
  const data = useStaticQuery(graphql`
  {
    contentfulNavigationMenu(title: {eq: "nav-bar"}) {
      id
      navigationLink {
        url
        title
      }
    }
  }
  `)
    
    return (
        <div className={nav}>
            <Link className={navItem} to="/">Works</Link>
            <Link className={navItem} to="/blog">Blog</Link>
            <Link className={navItem} to="/">Contact</Link>
        </div>
    )

}

