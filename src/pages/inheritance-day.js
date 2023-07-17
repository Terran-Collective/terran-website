import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Panel from "../components/panel"
import Headline from "../components/headline"
//import rubusSpectabilis from "../images/bioregion/bioregion_rubus_spectabilis.jpg"

const InheritanceDayPage = () => (
  <Layout>
    <div className="heroPanel bioregionHero">
      <Panel justification="center">
        <div className="pageHero">
          <Headline
            title="Inheritance Day"
            subtitle="Storytelling for cultural evolution"
          />
          <p>It's time to once again come together to celebrate our ancestors for all that they've given us, all the hard work they put in to create the world we live in today. And by today, I mean December 12th, 2171</p>
        </div>
      </Panel>
      <div className="heroPanelBg"></div>
    </div>

    <Panel justification="center">
      <div className="twoColumnsLeftImage">
        <figure>
          <StaticImage src="../images/bioregion/bioregion_aphelocoma_californica2x.jpg" alt="Aphelocoma californica" />
          <figcaption>Aphelocoma californica</figcaption>
        </figure>
      </div>
      <div className="twoColumnsRightText">
        <Headline
          title="What are we inheriting?"
        />
        <p>We celebrate Inheritance Day annually on December 12th. On this day, we envision
          we are 150 years in the future, and humans have learned to live
         in harmony with each other and the planet. War is a thing of the past.
         The global community eliminated poverty and ensured that every person has food,
         shelter, and healthcare by focusing on thriving and abundance for all. We have learned
         how to live lightly and sustainably with the planet, there is renewable energy for all,
          and the earth's systems have been restored to a healthy balance. Women, LGBTQIA folx,
          and people of all cultures, colors and religious beliefs have equal rights and freedoms worldwide.</p>
          <p>So we sit down to dinner with our families, both birth and chosen, and celebrate these
          incredible achievements that our ancestors worked so hard for! The meal
          has a special set of courses, similar to Passover (with a dash of Thanksgiving),
          and each one honors the important historical milestones that we achieved.
          We ring a special bell at the start of each course, so we name them Bell 1,
          Bell 2, etc. and each bell has associated activities/ritual. We also use this
          dinner to reflect on our own ancestral lineage and cultural heritage that
          lead to us being alive today on this incredible mother earth.</p>
        <p>We invite you to adopt this holiday as your own. Below you will
        find our suggested plan for the ritual, including a sample menu, but feel
        free to adapt as desired! Below that is a sample invitation you could send
        out to your friends and family.</p>
      </div>
    </Panel>

  </Layout>

)

export default InheritanceDayPage
export { Head } from "../components/page-head"