import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import contactImg from "../images/bcg/contactBcg.jpeg"

const PalmaresPage = () => (
  <Layout>
    <SEO title="chevaux" />
    <PageHeader img={contactImg}>
      <Banner title="Le palmares" subtitle="de Ludovic" />
    </PageHeader>
  </Layout>
)
export default PalmaresPage
