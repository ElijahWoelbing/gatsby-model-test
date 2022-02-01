import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import './Layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )

}



