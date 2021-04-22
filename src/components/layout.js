import React from "react"
import BackgroundImage from "./BackgroundImage"

import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <BackgroundImage />
    </>
  )
}

export default Layout
