/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

import Navbar from "../components/globals/navbar/Navbar"
import Footer from "../components/globals/Footer"

// import "./bootstrap.min.css" -> methode css avec bootstrap
// ci dessous, méthode css classique
// import "./layout.css"
// import "../sass/layout.scss" -> methode avec SASS (scss)

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Open Sans', sans-serif;
  color: #262626;
  background: #fff;
}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
