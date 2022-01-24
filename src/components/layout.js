import * as React from "react"
import "./Layout.scss"
import NavBar from "./NavBar"

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )

}



