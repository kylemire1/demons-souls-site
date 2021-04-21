import React from "react"
import NavItem from "./NavItem"

const Nav = () => {
  return (
    <nav className="flex flex-row flex-wrap text-center justify-center">
      <NavItem to="/">Old King Allant</NavItem>
      <NavItem to="/">Dragon God</NavItem>
      <NavItem to="/">Old Monk</NavItem>
      <NavItem to="/">Storm King</NavItem>
      <NavItem to="/">Maiden Astraea</NavItem>
    </nav>
  )
}

export default Nav
