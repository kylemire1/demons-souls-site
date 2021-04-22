import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import parse from "html-react-parser"
import { Container, ContentBox } from "../components/styled/global"

const BossPage = ({ data }) => {
  const content = data.markdownRemark
  return (
    <Layout>
      <StyledContainer>
        <ContentBox>{parse(content.html)}</ContentBox>
      </StyledContainer>
    </Layout>
  )
}

export const bossQuery = graphql`
  query BossQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

const StyledContainer = styled(Container)`
  margin-top: 2em;
`

export default BossPage
