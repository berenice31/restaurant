import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import menuImg from "../images/bcg/menuBcg.jpeg"

const MenuPage = () => (
  <Layout>
    <SEO title="menu" />
    <PageHeader img={menuImg}>
      <Banner title="Menu" subtitle="à la carte en ce moment" />
    </PageHeader>
  </Layout>
)
export default MenuPage
