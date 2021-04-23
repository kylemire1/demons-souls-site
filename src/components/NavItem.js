import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = ({ children, to }) => {
  return <StyledLink to={to}>{children}</StyledLink>
}

const StyledLink = styled(Link)`
  white-space: nowrap;
  color: white;

  :hover,
  :focus {
    color: goldenrod;
  }
  & + & {
    margin-left: 1rem;
  }

  @media (max-width: 61.25em) {
    margin-bottom: 1rem;
  }
`

export default NavItem
