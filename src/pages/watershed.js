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
        <p>We have structured our organization in a way that represents our values, creating a diversity of options for how we can fill our wells, and to allow supporters and partners to contribute resources to our mission. Currently we manage a for-profit entity called the Terran Collective LLC, which mostly does mostly contract software development work with aligned partners like DAOstack as our primary source of income. Moving forward we want to move our work more and more into the gift, and this is where the Terran Watershed comes in as the source of life that will allow us to more fully pursue our purpose and share our gifts with the world. </p>
        <p>Terran Watershed is a non-profit 501c3, fiscally sponsored by our friends and allies at <a href="https://www.empowermentworks.org/">Empowerment Works</a>. We are asking for contributions to our Watershed in form of tax deductible donations.  </p>
        <p>Over the past three years we have built a software platform for matching needs and offers, hosted many community events, mapped important relationship and energy landscapes within our bioregion and researched and developed systems for distributed collective governance and ownership. We have been able to do this without funding, and are looking to evolve into the next level of our stewardship of this work.</p>
        <p>Our work of software development, community building, supporting fellow players in regeneration work, organizing action days, and sharing tools is in the form of a gift. In order to bestow this gift, your donations will provide resources for the Core team to thrive and do their life’s work. Your donations into The Watershed allow for a continuation of our research, development, education, community building, service and tools.</p>
      </div>
    </Panel>

    <Panel justification="center">
      <div id="stewardship" className="resourceUse">
        <Headline
          title="How will resources in the watershed be used?"
        />
        <ul>
          <li>
            <img src={resourceUse1} alt="Mapping & Network building"/>
            <h2>Mapping &amp; Network building</h2>
            <div>
              <p>In order to transition from an extractive system to a closed-loop, regenerative system, our landscape needs to be mapped and new networks must be built. The rise of ridesharing and homesharing marketplace technologies are a hint of what is possible if we are able to map needs, offers, abilities, untapped resources and knowledge.</p>
              <p>During 2020 we will continue to map the landscape of regenerative projects in the San Francisco Bay Area. With this community as our first audience, our research seeks to uncover ways of surfacing the hidden landscape of the human and natural world, and build networks so that resources, energy and knowledge can flow freely outside of the market.</p>
            </div>
          </li>
          <li>
            <img src={resourceUse2} alt="Tools and technology"/>
            <h2>Tools and technology</h2>
            <div>
              <p>Our research and the knowledge generated by countless others throughout the world will directly inform our creation of tools and technology that will foster new commons, strengthen communities and nurture healthy individuals, disintermediating human economic activity and human relationships with the land.</p>
              <p>The tools are built from the ground up to operate as public utilities and protocols, for the use of all in perpetuity, where the costs of maintenance and the wealth generated are distributed among the community.</p>
            </div>
          </li>
          <li>
            <img src={resourceUse3} alt="Community and Relationships"/>
            <h2>Community and Relationships</h2>
            <div>
              <p>Our research &amp; technology is intended to create new culture. At the heart of the culture we see as necessary for a thriving world is one where tools and economic systems produce deeper community and healthy relationships.</p>
              <p>When communities and relationships are healthy, the current global market system can be disintermediated. In addition to public utilities and protocols, we are searching for social and technological tools that empower and engage people within their communities, relationships and workplaces.</p>
            </div>
          </li>
          <li>
            <img src={resourceUse4} alt="Governance and Ownership"/>
            <h2>Governance and Ownership</h2>
            <div>
              <p>With new maps, tools, and a culture that has learned how to rely on community and relationships, a new cooperative landscape is opened. Cooperating within this landscape will only be possible with new systems for collective ownership, decision-making and governance.</p>
              <p>We have worked at the bleeding edge of distributed governance, ownership and resource sharing, and seek to build and release models that allow for communities to steward commons in ways that are more efficient and more empowering than current corporate, non-profit or governmental platforms.</p>
            </div>
          </li>
        </ul>
        <div className="centerText">
          <Button link="/what-we-do/" label="More about what we do" />
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
            <a href="https://www.flipcause.com/secure/cause_pdetails/NzAxODE=" target="_blank" rel="noopener noreferrer" className="button">Become a divestor</a>
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
