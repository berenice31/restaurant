import React from "react"
// import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

// import { FaBeer } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <ButtonWrapper>Click Me</ButtonWrapper> */}
    {/* la partie ci dessous n'est utile que pour la version avec bootstrap !! */}
    {/* <div className="container">
      <div className="row">
        <div className="col-6"> Hello world</div>
        <div className="row-6"> Hello world</div>
      </div>
    </div> */}
    <h3> this is home page</h3>
  </Layout>
)

// ici, styled.(une balise html -> section, bouton, article...)
// const ButtonWrapper = styled.button`
//   /* on peut utiliser, à l'intérieur des styled-components, des variables css(ou scss) */
//   background: blue;
//   color: white;
// `
export default IndexPage
