import React from 'react';
import Navigation from './Navigation';
import LanguageMenu from './LanguageMenu';
import Footer from './Footer';
import './Layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <LanguageMenu />
      {children}
      <Footer />
    </>
  )

}



