import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Panel from "../components/panel"
import Headline from "../components/headline"
import Button from "../components/button"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Panel justification="right">
      <div style={{maxWidth: "90%", width: "50%"}}>
        <Headline
          title="A community of care and practice"
          titleAccent="building tools for a regenerative future"
          titleAccentColor="#2b80f0"
          subtitle="What is life?" />
        <p style={{
          fontFamily: 'DINPro-Light',
          lineHeight: `36px`,
          margin: `30px 0 50px`,
          width: `100%`,
        }}>We are technologists, systems thinkers, entrepreneurs, activists, and artists. We are here to amplify cooperation in service to regeneration in the Bay Area bioregion through technology, collective action and rebuilding the commons.</p>
        <div style={{textAlign: `center`}}>
          <Button label="What is Terran?" link="/whatisterran/"/>
          <Button label="What are we doing?" link="/whatarewedoing/"/>
          <Button label="Participate" link="/watershed/"/>
        </div>
        <div style={{ maxWidth: `300px`, margin: `1.45rem` }}>
          <Image />
        </div>
      </div>
    </Panel>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/whatarewedoing/">What Are We Doing?</Link>
  </Layout>
)

export default IndexPage
