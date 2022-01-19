import * as React from "react"
import "./Layout.scss"
import NavBar from "./nav-bar"

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )

}



