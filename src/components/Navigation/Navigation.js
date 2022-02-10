import React from 'react';
import { useLocale } from '../LocaleProvider.js';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { nav, navItems, navItem, dropdown, dropdownContent, dropdownItem, dropdownButton } from './Navigation.module.scss';
export default function Navigation() {
  const data = useStaticQuery(graphql`
    {
      contentfulBlockNavigation(contentful_id: {eq: "2svumzaCuEtPRYHFmSWdf1"}) {
        navigationLinks {
          url
          linkText
        }
        backgroundColor
        textColor
      }
    }
  `)
  const { changeLocale } = useLocale();
  const languages = [
    {
      language: 'English',
      locale: 'en-US'
    },
    {
      language: 'German',
      locale: 'de-DE'
    }
  ]

  const navData = data.contentfulBlockNavigation;

  return (
    <div className={nav} style={{ color: navData.textColor, backgroundColor: navData.backgroundColor }}>
      <div className={navItems}>
        {navData.navigationLinks.map((link, i) => {
          return <Link className={navItem} to={link.url} key={i}>{link.linkText}</Link>
        })}
      </div>
      <div className={dropdown}>
        <span>Language <span style={{ fontSize: '12px' }}>&#9660;</span></span>
        <div className={dropdownContent}>
          {languages.map((language, i) => {
            return <button className={dropdownButton} key={i} onClick={() => {
              changeLocale(language.locale);
            }} >{language.language}</button>
          })}
        </div>
      </div>
    </div>
  )
}

