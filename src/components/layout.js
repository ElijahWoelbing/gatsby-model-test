import * as React from 'react'
import './Layout.scss'
import Navigation from './Navigation'
import Footer from './Footer'
export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )

}



