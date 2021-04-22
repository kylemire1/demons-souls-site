import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import NavItem from "./NavItem"

const Nav = () => {
  const result = useStaticQuery(graphql`
    query SitePages {
      allSitePage(filter: { path: { glob: "/bosses/*" } }) {
        nodes {
          id
          path
          context {
            title
          }
        }
      }
    }
  `)

  return (
    <StyledNav>
      {result &&
        result.allSitePage.nodes.map(node => (
          <NavItem key={node.id} to={node.path}>
            {node.context.title}
          </NavItem>
        ))}
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
`

export default Nav
