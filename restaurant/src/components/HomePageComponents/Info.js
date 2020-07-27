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
          // title="Notre mission"
        />
        <InfoWrapper>
          <p className="text">
            {" "}
            L'écurie de propriétaire de la métairie basse, située à FREJEVILLE ,
            à 10 minutes de Castres, vous accueille dans un cadre idyllique pour
            vous et votre compagnon de loisir. Pension, Valorisation, n'hésitez
            pas à nous contacter
          </p>
          <Link
            className="jauge"
            to="/contact/"
            style={{ textDecoration: "none" }}
          >
            <span className="jauge-remplissage">
              <SectionButton style={{ margin: "2rem auto" }}>
                {" "}
                contact
              </SectionButton>
            </span>
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
  @media (min-width: 992px) {
    width: 60%;
  }
  CSS .jauge {
    width: 100px;
    height: 200px;
    display: block;
    background-color: #303030;
    position: relative;
  }
  /* .jauge {
    width: 100px;
    height: 200px;
    display: block;
    background-color: #303030;
    position: relative;
  }
  .jauge-remplissage {
    transition: all 0.3s linear 0s;
    background-color: #33bee5;
    width: 100%;
    height: 0;
    position: absolute;
    left: 0;
    bottom: 0;
  } */
  .jauge:hover .jauge-remplissage {
    height: 100%;
  }
`
