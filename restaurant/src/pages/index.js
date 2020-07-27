import React from "react"
// import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner, BannerButton } from "../utils"
import img from "../images/bcg/white-horse.jpg"
import Info from "../components/HomePageComponents/Info"
import Gallery from "../components/HomePageComponents/Gallery"
import { Link } from "gatsby"

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
    <HomeHeader img={img}>
      <Banner
        title="écurie SIMIONI"
        subtitle=" à 10 minutes de castres, pension, valorisation et accompagnement par Ludovic Simioni, cavalier professionnel. "
      >
        <Link to="/prestations/" style={{ textDecoration: "none" }}>
          <BannerButton style={{ margin: "2rem auto" }}>
            {" "}
            Palmarès{" "}
          </BannerButton>
        </Link>
      </Banner>
    </HomeHeader>
    {/* <Info />
    <Gallery /> */}
  </Layout>
)

// ici, styled.(une balise html -> section, bouton, article...)
// const ButtonWrapper = styled.button`
//   /* on peut utiliser, à l'intérieur des styled-components, des variables css(ou scss) */
//   background: blue;
//   color: white;
// `
export default IndexPage
