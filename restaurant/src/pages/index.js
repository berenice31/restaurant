import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3> hello from gatsby !</h3>
    {/* la partie ci dessous n'est utile que pour la version avec bootstrap !! */}
    {/* <div className="container">
      <div className="row">
        <div className="col-6"> Hello world</div>
        <div className="row-6"> Hello world</div>
      </div>
    </div> */}
  </Layout>
)

export default IndexPage
