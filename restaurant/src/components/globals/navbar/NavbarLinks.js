import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../../utils"

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/actu/",
        name: "actualités",
      },
      {
        id: 1,
        path: "/palmares/",
        name: "palmarès",
      },
      {
        id: 2,
        path: "/installations/",
        name: "installations",
      },
      {
        id: 3,
        path: "/prestations/",
        name: "prestations",
      },
      {
        id: 4,
        path: "/chevaux/",
        name: "chevaux",
      },
      {
        id: 5,
        path: "/contact/",
        name: "contact",
      },
    ],
  }
  render() {
    console.log("etat de navbaropen", this.props.navbarOpen)
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(link => {
          return (
            <li key={link.id}>
              <Link to={link.path} className="nav-link">
                {link.name}
              </Link>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  li {
    background-color: ${styles.colors.mainBlack};
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem;
    color: #efefef;
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      color: #00c896;
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  height: ${props => (props.open ? "152px" : "0px")};
  overflow: hidden;
  ${styles.transObject({ time: "1s" })};
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      padding: 0.5rem 1rem;
    }
  }
`
