import React from "react"
import { Link } from "gatsby"

const NavItem = ({ children, to }) => {
  return (
    <Link className="ml-4 whitespace-nowrap" to={to}>
      {children}
    </Link>
  )
}

export default NavItem
