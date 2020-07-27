import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { styles, Section } from "../../utils"

const Gallery = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          file(relativePath: { eq: "homeGallery/img-1.jpeg" }) {
            childImageSharp {
              fluid(maxWidth: 500) {
                src
              }
            }
          }
        }
      `}
      render={data => console.log(data)}
    />
  )
}
export default Gallery
