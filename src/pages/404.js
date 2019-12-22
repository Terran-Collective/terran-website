import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <div style={{ position: "relative", top: "86px", left: "27px", height: "225px" }}>
      <h1>Page not found</h1>
      <p>You seem to be lost! Check out all the cool pages in the footer below</p>
    </div>
  </Layout>
)

export default NotFoundPage
