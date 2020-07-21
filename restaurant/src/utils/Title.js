import React from "react"
import styled from "styled-components"
import { styles } from "../utils"

const Title = ({ title, message }) => (
  <TitleWrapper>
    <h3 className="message"> {message}</h3>
    <h1 className="title"> {title} </h1>
    <div className="underline"></div>
  </TitleWrapper>
)
export default Title

Title.defaultProps = {
  message: "notre message",
  title: "notre titre",
}

const TitleWrapper = styled.div`
  text-align: center;
  .message {
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: "0.2rem" })};
    font-size: 2rem;
    color: ${styles.colors.mainYellow};
  }
  .title {
    ${styles.letterSpacing({ spacing: "0.2rem" })}
    font-size: 2rem;
    text-transform: uppercase;
  }
  .underline {
    width: 5rem;
    height: 0.2rem;
    background: ${styles.colors.mainYellow};
    margin: 0.5rem auto;
  }
`
