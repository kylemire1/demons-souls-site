import React from "react"
import Container from "../components/Container"
import Layout from "../components/layout"

const BossPage = props => {
  return (
    <Layout>
      <Container>{JSON.stringify(props, null, 2)}</Container>
    </Layout>
  )
}

export default BossPage
