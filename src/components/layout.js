import React from 'react';
import LocaleProvider from './LocaleProvider';
import Navigation from './Navigation';
import LanguageMenu from './LanguageMenu';
import Footer from './Footer';
import './Layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <LocaleProvider>
        <Navigation />
        <LanguageMenu/>
        {children}
        <Footer />
      </LocaleProvider>
    </>
  )

}



