import * as React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const IndexPage = function ({data}) {

  return (
    <Layout>
      <div>Index Page</div>
    </Layout>
  )
}

export default IndexPage;