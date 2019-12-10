import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Panel from "../components/panel"
import Headline from "../components/headline"
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
          maxWidth: `550px`,
        }}>We are technologists, systems thinkers, entrepreneurs, activists, and artists. We are here to amplify cooperation in service to regeneration in the Bay Area bioregion through technology, collective action and rebuilding the commons.</p>
        <button>What is Terran?</button>
        <button>What are we doing?</button>
        <button>Participate</button>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </div>
    </Panel>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/whatarewedoing/">What Are We Doing?</Link>
  </Layout>
)

export default IndexPage
