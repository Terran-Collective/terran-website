import React from "react"

import Layout from "../components/layout"
import Panel from "../components/panel"
import Headline from "../components/headline"
import Button from "../components/button"
import Image from "../components/image"
import SEO from "../components/seo"

import watershedLogo from "../images/logos/terran_watershed_logo_2x.png"
import resourceUse1 from "../images/watershed/watershed_resource_use_1.png"
import resourceUse2 from "../images/watershed/watershed_resource_use_2.png"
import resourceUse3 from "../images/watershed/watershed_resource_use_3.png"
import resourceUse4 from "../images/watershed/watershed_resource_use_4.png"
import aesculusCalifornica from "../images/watershed/watershed_aesculus_californica.jpg"


const watershed = () => (
  <Layout>
    <SEO title="Terran Watershed" />

    <div className="heroPanel watershedHero">
      <Panel justification="center">
        <div className="pageHero">
          <img src={watershedLogo} alt="Terran Watershed" />
          <Headline
            title="A foundation for thriving bioregions"
          />
          <p>The tools we make and the experiments we perform are for the benefit of all. The Watershed is the primary container where we receive and steward resources in support of our efforts to bring about systems, tools, and infrastructure for the more beautiful world our hearts know is possible.</p>
          <Button link="/watershed/#goals" label="2020 Resource Goals" />
          <Button link="/watershed/#stewardship" label="How will resources be used?" />
          <a href="https://www.flipcause.com/secure/cause_pdetails/NzAxODE=" className="button">Support us financially</a>
        </div>
      </Panel>
      <div className="heroPanelBg"></div>
    </div>

    <Panel justification="center">
      <div className="twoColumnsLeftImage">
        <Image filename="watershed/watershed_seqouia_sempervirens.jpg" alt="Seqouia sempervirens" showCaption="true"/>
      </div>
      <div className="twoColumnsRightText">
        <Headline
          title="We need your help to fill the watershed"
        />
        <p>We have structured our organization in a way that represents our values, creating diverse options for how we fill our wells, and allow supporters and partners to contribute resources to our mission. Currently, we manage Terran Collective LLC, a software development and consulting agency that works with aligned partners like DAOstack. Our agency is our primary source of income, which funds our pro bono work to care for our bioregion.</p>
        <p>Moving forward, we want to offer more and more in the spirit of the gift. Thus, we are birthing Terran Watershed as the source of life that will allow us to more fully pursue our purpose and share our gifts with the world.</p>
        <p>Terran Watershed is a non-profit 501c3, fiscally sponsored by our friends and allies at <a href="https://www.empowermentworks.org/">Empowerment Works</a>. We are asking for contributions to our Watershed in the form of tax deductible donations.</p>
        <p>Our work in five comprehensive scopes of practice - storytelling, community, technology, mapping, and commoning - is in the form of a gift. Your donations to Terran Watershed will provide resources for our core team to thrive and do our life’s work, nourishing our ability to offer these gifts to the world.</p>
        <div className="centerText">
          <a href="https://www.flipcause.com/secure/cause_pdetails/NzAxODE=" target="_blank" rel="noopener noreferrer" className="button">Donate Now</a>
        </div>
      </div>
    </Panel>

    <Panel justification="center">
      <div id="stewardship" className="resourceUse">
        <Headline
          title="How will resources in the watershed be used?"
        />
        <ul>
          <li>
            <img src={resourceUse1} alt="Storytelling for cultural evolution"/>
            <h2>Storytelling for cultural evolution</h2>
            <div className="resourceUseText">
              <p>Achieving our goals will require major shifts in our cultural narratives, to evolve deep-rooted  beliefs of fear, scarcity and separation to agency, abundance and interdependence. Terran creates hopeful and inspiring content, memes, events, and more, in order to build a movement which aligns us around a new shared purpose for civilization - creating a world that works for all.</p>
              <div>
                <h3>2020 Outcomes</h3>
                <p>Publishing monthly articles on our work in the five scopes of practice</p>
              </div>
            </div>
          </li>
          <li>
            <img src={resourceUse3} alt="Community weaving"/>
            <h2>Community weaving</h2>
            <div className="resourceUseText">
              <p>Through community, we can develop resilience amidst rapid change, heal and regenerate the land we live on, and step into solidarity, equity and abundance together. All our work is ultimately about building deeper, stronger, relationships based on trust.</p>
              <div>
                <h3>2020 Outcomes</h3>
                <p>Coordinate 1 Action Day per quarter in 2020 that results in 5+ high quality connections per participant</p>
                <p>Convene 1 community gathering per month to deepen existing relationships.</p>
                <p>Host our annual events: Terran Camp, Cospiracy, and Inheritance Day</p>
              </div>
            </div>
          </li>
          <li>
            <img src={resourceUse2} alt="Technology for thriving"/>
            <h2>Technology for thriving</h2>
            <div className="resourceUseText">
              <p>We envision technology that will foster new commons, strengthen communities and nurture healthy individuals. Our tools are built from the ground up to operate as public utilities and protocols, for the use of all in perpetuity, where governance, maintenance costs, and abundance generated are distributed among the community.</p>
              <div>
                <h3>2020 Outcomes</h3>
                <p>Conduct user interviews with 10 communities, and create MOUs with each to build a tool they will use</p>
                <p>Develop & release technological roadmap in partnership with allied bioregional communities</p>
                <p>Build and release our core platform for collaboration and prototype a relationship graph</p>
                <p>Welcome 10 communities onto our platform and work together to test the tools</p>
              </div>
            </div>
          </li>
          <li>
            <img src={resourceUse1} alt="Collaborative ecosystem mapping"/>
            <h2>Collaborative ecosystem mapping</h2>
            <div className="resourceUseText">
              <p>In order to transition from an extractive system to a closed-loop, regenerative system, we must map resource flows and share the findings transparently. During 2020, we will map the ecosystem of regenerative projects in the San Francisco Bay Area. Our research examines the hidden landscape of the human and natural world, and how we can build networks so that resources, energy and knowledge flow freely outside of the market.</p>
              <div>
                <h3>2020 Outcomes</h3>
                <p>Interview 5-10 organizations in the bioregion to understand their context, needs, and offerings, and how we can best collaborate</p>
                <p>Map resource flows of the Bay Area regenerative community, prioritizing interoperability with existing mapping efforts</p>
              </div>
            </div>
          </li>
          <li>
            <img src={resourceUse4} alt="Regenerating the commons"/>
            <h2>Regenerating the commons</h2>
            <div className="resourceUseText">
              <p>With new maps, technology, and a culture that has learned how to rely on community and relationships, a new cooperative landscape opens up. Stewarding this rebirthed commons will only be possible with evolved systems for collective ownership, decision-making and governance. We seek to build models that allow for communities to steward commons in ways that are more efficient and more empowering than current corporate, non-profit or governmental platforms.</p>
              <div>
                <h3>2020 Outcomes</h3>
                <p>Nurture development of 3 initial bioregional guilds & identify tools needed to help them</p>
                <p>Experiment in collective governance and financial solidarity within Terran</p>
              </div>
            </div>
          </li>
        </ul>
        <div className="centerText">
          <Button link="/what-we-do/" label="More About Our Scopes of Practice" />
        </div>
      </div>
    </Panel>

    <Panel justification="center">
      <div className="twoColumnsLeftText">
        <Headline
          title="We are seeking divestors"
        />
        <p>Divestors are people who understand the need to transfer resources from the extractive economy to the regenerative economy as quickly as possible. Transforming fixed fiat wealth into cascading ecosystem/bioregional/living abundance. So currency may become a current for good. <span role="img" aria-label="ocean wave">🌊</span></p>
        <p>Investment looks for returns for the investor, usually within a time-horizon that causes investors to think in very short terms. Our plan for economic and ecologic thriving is long-term: We are developing systems, tools and communities that work for the seven generations yet to come. When you divest into this collective, you are seeking returns for your grandchildren and the bioregional communities within which they will thrive.</p>
      </div>
      <div className="twoColumnsRightImage">
        <Image filename="watershed/watershed_meleagris_gallopavo2x.jpg" alt="Meleagris Gallopavo" showCaption="true" />
      </div>
    </Panel>
    <div id="goals" className="threeColumns">
      <Panel justification="center">
        <img className="rubusSpectabilis leftImage" src={aesculusCalifornica} alt="Aesculus Californica" />
        <div className="resourceGoals singleColumnText">
          <Headline
            title="$500,000"
            subtitle="Our 2020 resource goals"
          />
          <p>We practice full transparency in finances and invite you to take a look at a draft of our operating budget.</p>
          <div className="centerText">
            <a className="button" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/d/1mR8-mcoVtm0OhIcpRs1e1jP305WNHSMG3K1Uh9Hi81I/">Our 2020 Budget Goals</a>
          </div>
          <p>For the last three years we have contributed our extra time and energy, and have supported each other financially to work on this vision. We are committed to building a way of life that realizes the hopes in our hearts, and we see this as a lifetime project. Any resources we receive, any help we receive, will help us to accomplish our goals sooner, and be able to share our research, tools and systems with the world more rapidly</p>
          <p>We are doing this work for the people and the Earth, not to enrich ourselves or investors. We don’t expect traditional investment structures such as venture capital to understand the value of this work, so we are asking you, our community, to join with us in creating a better world. Please consider giving a monthly donation of time or money. We believe that the community patronage model could be an example of how we can fund the transformative work that is required at this time. We are also of course happy to accept larger one time donations  to give us a big rocket boost as we leap into this work whole-heartedly.</p>
          <p>We are asking you to trust us and join us in this radical experiment, to see if we can give ourselves over completely to be of service to our bioregion and the world. Now is the time for to put our energy and resources into radical experimentation and change. The world is calling for a transition from the extractive economy into the regenerative economy, so we can liberate our communities, ecosystems, and align with our true value systems. And stop us from destroying ourselves and the planet. Help us begin right now, right here, with us.</p>
          <div className="centerText">
            <a href="https://www.flipcause.com/secure/cause_pdetails/NzAxODE=" target="_blank" rel="noopener noreferrer" className="button">Become a Divestor</a>
          </div>
        </div>
        <img className="rubusSpectabilis rightImage" src={aesculusCalifornica} alt="Aesculus Californica" />
      </Panel>
    </div>

    <Panel>
      <div className="singleColumnImage">
        <Image filename="watershed/watershed_sylvilagus_bachmani2x.jpg" alt="Sylvilagus bachmani" showCaption="true"/>
      </div>
    </Panel>

  </Layout>

)

export default watershed
