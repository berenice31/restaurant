import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import contactImg from "../images/bcg/contactBcg.jpeg"

const NewsPage = () => (
  <Layout>
    <SEO title="news" />
    <PageHeader img={contactImg}>
      <Banner title="Les actualités" subtitle="de Ludovic" />
    </PageHeader>
  </Layout>
)
export default NewsPage
