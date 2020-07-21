import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import contactImg from "../images/bcg/contactBcg.jpeg"

const ContactPage = () => (
  <Layout>
    <SEO title="contact" />
    <PageHeader img={contactImg}>
      <Banner
        title="Contactez-nous !"
        subtitle="N'hésitez pas à prendre contact avec nous pour toute demande particulière"
      />
    </PageHeader>
  </Layout>
)
export default ContactPage
