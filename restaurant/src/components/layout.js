/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// import "./bootstrap.min.css" -> methode css avec bootstrap
// import "./layout.css" -> methode css classique
// import "../sass/layout.scss" -> methode avec SASS (scss)

const Layout = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
