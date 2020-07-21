import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import aboutImg from "../images/bcg/aboutBcg.jpeg"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <PageHeader img={aboutImg}>
      <Banner
        title="à propos de nous"
        subtitle="restaurant traditionnel - Produits frais uniquement"
      />
    </PageHeader>
  </Layout>
)
export default AboutPage
