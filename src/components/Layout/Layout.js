import React from 'react';
import Navigation from '../Navigation/Navigation';
import LanguageMenu from '../LanguageMenu/LanguageMenu';
import Footer from '../Footer/Footer';
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



