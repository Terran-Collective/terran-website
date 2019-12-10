import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const WhatAreWeDoingPage = () => (
  <Layout>
    <SEO title="What Are We Doing" />
    <h1>What Are We Doing</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WhatAreWeDoingPage
