import React from "react"
import Container from "./Container"

import Nav from "./Nav"

const Header = () => {
  return (
    <header className="py-2 bg-gray-900">
      <Container>
        <div className="flex flex-col justify-between items-center text-gray-50 lg:flex-row">
          <div className="text-4xl font-bold mb-2">Demon's Souls</div>
          <Nav />
        </div>
      </Container>
    </header>
  )
}

export default Header
