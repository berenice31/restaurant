import React, { Component } from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../utils"

export default class Info extends Component {
  render() {
    return (
      <Section>
        <Title
          message="Présentation de l'établissement"
          title="Notre mission"
        />
        <InfoWrapper>
          <p className="text">
            {" "}
            Ici, c'est une maison plus qu'un restaurant - où l'art de vivre se
            pratique avec douceur, discrétion et charme. On vous accueille avec
            respect, convivialité, chaleur et très vite, comme des amis. Le mot
            client n'a pas de sens.
          </p>
          <Link to="/about/" style={{ textDecoration: "none" }}>
            <SectionButton style={{ margin: "2rem auto" }}>
              {" "}
              à propos
            </SectionButton>
          </Link>
        </InfoWrapper>
      </Section>
    )
  }
}

const InfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
`
