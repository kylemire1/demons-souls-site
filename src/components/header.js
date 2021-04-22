import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Container } from "./styled/global"

import Nav from "./Nav"

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderInner>
          <SiteTitle>
            <Link to="/">Demon's Souls Wiki</Link>
          </SiteTitle>
          <Nav />
        </HeaderInner>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  padding: 0.5rem 0;
  background-color: rgb(25, 25, 25);
`

const HeaderInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;

  @media (min-width: 61.25em) {
    flex-direction: row;
  }
`

const SiteTitle = styled.h1`
  display: block;
  margin: 0.5em;
  color: white;
  a {
    color: white;
  }
`

export default Header
