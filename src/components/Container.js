import React from "react"
import styled from "styled-components"

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

const StyledContainer = styled.div`
  padding: 0 0.5rem;
  max-width: 72em;
  margin: 0 auto;
`

export default Container
