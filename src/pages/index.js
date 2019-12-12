import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Panel from "../components/panel"
import Headline from "../components/headline"
import Button from "../components/button"
import Image from "../components/image"
import SEO from "../components/seo"
import hero from "../images/home/home_hero2x.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{
      background: `url(${hero})`,
      backgroundPosition: `center right`,
      backgroundSize: `60%`,
      backgroundRepeat: `no-repeat`,
      height: `100vh`,
      paddingTop: `100px`,
      paddingLeft: `50px`,
      width: `100%`,
    }}>
      <Panel justification="right">
        <div style={{maxWidth: "90%", width: "50%"}}>
          <Headline
            title="A community of care and practice"
            titleAccent="building tools for a regenerative future"
            titleAccentColor="#2b80f0" />
          <p style={{
            fontFamily: 'DINPro-Light',
            lineHeight: `36px`,
            margin: `30px 0 50px`,
            width: `100%`,
          }}>We are technologists, systems thinkers, entrepreneurs, activists, and artists. We are here to amplify cooperation in service to regeneration in the Bay Area bioregion through technology, collective action and rebuilding the commons.</p>
          <div style={{textAlign: `center`}}>
            <Button label="What is Terran?" link="/what-is-terran/"/>
            <Button label="What are we doing?" link="/what-are-we-doing/"/>
            <Button label="Participate" link="/watershed/"/>
          </div>
        </div>
      </Panel>
    </div>
    <div>
      <div>
        <div style={{ maxWidth: `50%`, margin: `0` }}>
          <Image filename="home/home_erysimum_franciscanum2x.jpg" alt="Erysimum" />
        </div>
        <div>
          <Headline
            title="Terran Collective is"
            titleAccent="a living system"
            titleAccentColor="#0ad066"
            subtitle="What is Terran?" />
          <p>Terran Collective is <strong>a community</strong> of people who are committed to the work of healing and transformation necessary for all beings in our bioregion to thrive.</p>
          <p>Terran is <strong>a living system</strong>. We embrace our interdependence with the web of life, and believe that there is abundance for all on this beautiful planet. To get there, we must re-design how humans relate to each other and the planet, applying the lessons of emergent strategy to adaptation, decentralization, fractal awareness, resilience, and iterative change to our work.</p>
          <p>As a <strong>community of care</strong>, we support each other on our paths of personal healing and growth. As <strong>a community of practice</strong>, we help each other find our purpose and share our gifts with the world, while collaborating on projects aligned with our mission. As <strong>a commons</strong>, we collectively govern and share resources.</p>
          <p>Relating in these new and remembered ways provides the laboratory through which we research and experiment with creating bioregional collective intelligence, in service to all beings thriving.</p>
        </div>
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/whatarewedoing/">What Are We Doing?</Link>
  </Layout>
)

export default IndexPage
