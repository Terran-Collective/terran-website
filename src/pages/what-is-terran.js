import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Panel from "../components/panel"
import Headline from "../components/headline"
import Button from "../components/button"
import Image from "../components/image"
import SEO from "../components/seo"
import hero from "../images/what_is/what_is_hero.jpg"

const WhatIsTerranPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{
      background: `url(${hero})`,
      backgroundPosition: `center right`,
      backgroundSize: `100%`,
      backgroundRepeat: `no-repeat`,
      height: `100vh`,
      paddingTop: `100px`,
      paddingLeft: `50px`,
      width: `100%`,
    }}>
      <Panel>
        <div style={{maxWidth: "90%", width: "50%"}}>
          <div style={{
            maxWidth: "600px",
            margin: "0 auto"
          }}>
          <Headline
            title="We are a collective of people with a common vision of a world in balance"
            subtitle="WHAT IS TERRAN?"/>
            <p>We are a small band of humans based in the Bay Area navigating towards a way of life in balance with all people and all of nature. Our collective work is to design and practice this way of life as a necessary step to bring about the more beautiful world our hearts know is possible.</p>
            <div style={{textAlign: `center`}}>
              <Button label="Vision & mission" link="#visionandmission"/>
              <Button label="Core beliefs" link="#corebeliefs"/>
              <Button label="The people of the collective" link="#team"/>
            </div>
          </div>
        </div>
      </Panel>
    </div>
    <Panel>
      <div style={{ maxWidth: `50%`, margin: `0` }}>
        <Image filename="what_is/what_is_eschscholzia_californica2x.jpg" alt="Eschscholzia Californica" />
      </div>
      <div>
        <Headline
          title="We learn from nature"
          subtitle="OVERVIEW" />
          <p>Terran Collective is a living system and we learn from nature. We embrace our interdependence with the web of life, and believe that there is abundance for all on this beautiful planet. To get there, we must re-design how humans relate to each other and the planet, applying the lessons of emergent strategy: adaptation, decentralization, fractal awareness, resilience, and iterative change to our work.</p>
          <p>Relating in these new and remembered ways provides the laboratory through which we research and experiment with co-creating bioregional collective intelligence. Ultimately, we want to help people coordinate effectively outside of the current market/state system that is extractive, corrupt and leading our civilization to existential crisis.</p>
      </div>
    </Panel>
    <Panel>
      <Image filename="what_is/what_is_vaccinium_ovatum_left2x.jpg" alt="Vaccinium ovatum" />
      <Image filename="what_is/what_is_vaccinium_ovatum_right2x.jpg" alt="Vaccinium ovatum" />
      <div>
        <Headline
          title="All Beings Thriving"
          subtitle="WORKING TOWARDS" />
        <p><strong>What is thriving?</strong> We hold a vision of a world in which all beings can <strong>thrive</strong>. Not a world free of suffering or lack, but a world where each of us has the opportunity to live our best lives, where the abundant resources of this planet are shared equitably, where every community has the tools for resilience that enable people to bounce back from hardship, and a world where the purpose of human society is to create the most health and wellbeing possible for every person, plant, animal and being on this planet. </p>
        <p>We refer to <strong>all beings</strong> because we believe achieving this goal requires a shift away from the anthropocentric view of the current era of civilization. This view that sees humans as separate from nature has allowed us to create extractive and life-destroying systems leading to ecological overshoot and collapse and potentially the end of human life. It is time for us to once again see our place as a part of the whole web of life, and to become responsible stewards of the land we inhabit. Thus we must offer our care to every being we are in relationship with. </p>
      </div>
    </Panel>
    <Panel>
          <Image filename="what_is/what_is_ursus_americanus_californiensis2x.jpg" alt="Ursus Americanus Californiensis" />
    </Panel>
    <Panel>
      <Headline
        title="We are building tools to reinforce healthy relationships at every level"
        subtitle="WHOLE & HEALTHY SYSTEMS" />

      <Image filename="what_is/what_is_mission_diagram2x.jpg" alt="Terran Collective's mission"/>
    </Panel>
    <Panel>
      <Headline
        title="Our Core Beliefs"/>
      <p>We are a small group of people, and our core beliefs will change as we grow and include new perspectives. Some of our foundational beliefs are:</p>

      <ul>
        <li>
          <Image filename="what_is/what_is_core_12x.jpg" alt="Interbeing" />
          <h2>Interbeing</h2>
          <span>Sequoia sempervirens</span>
          <p>We are all interconnected. Everything we do impacts the people, animals, plants, and the whole ecosystem around us, and likewise we are affected by the actions, health and wellbeing of every part of the planetary whole, in infinite ways we can and cannot know. </p>
        </li>
        <li>
          <Image filename="what_is/what_is" alt="" />
          <h2>Abundance</h2>
          <span>Vitis californica</span>
          <p>There is enough for all, on this incredible Spaceship Earth we call home. We have all the resources needed for all beings to have what they need to thrive on this planet, if only we commit ourselves to that goal. </p>
        </li>
        <li>
          <Image filename="what_is/what_is" alt="" />
          <h2>Agency</h2>
          <span>Buteo jamaicensis</span>
          <p>Despite the many existential crises we face as a species, there is hope! We have the ability to choose our story, to design a new path for ourselves and humanity, and to decide how we want to live together on this planet.</p>
        </li>
      </ul>

    </Panel>
    <Panel>
      <Image filename="what_is/what_is_vision_diagram2x.jpg" alt="Terran Collective's Vision: All beings thriving with each other and the planet" />
    </Panel>
    <Panel>
      <Headline
        title="How we relate" />
      <p>We practice and experiment with community technologies and individual/group techniques that foster healing, trust and collaboration.</p>
      <ul>
        <li>
          <Image filename="what_is/what_is_scope_12x.png" alt="Community of Care" />
          <h2>Community of care</h2>
          <p>We support each person as a whole human being.</p>
          <p>We consistently show up for each other in times of need.</p>
          <p>We learn and practice tools for individual and collective healing and wellbeing.</p>
          <p>We facilitate healing processes for each other, through ceremony & group councils.</p>
          <p>We mediate conflict and practice alternative, restorative justice together.</p>
        </li>
        <li>
          <Image filename="what_is/what_is_scope_22x.png" alt="" />
          <h2>Our Community of Practice</h2>
          <p>We collaborate on projects together.</p>
          <p>We empower and support each other in pursuing our purpose.</p>
          <p>We mentor and share knowledge with each other.</p>
          <p>We participate in workshops and trainings, and share what we learn with each other.</p>
          <p>We organize reading & study groups.</p>
          <p>We share work opportunities and make helpful connections.</p>
          <p>We practice collective governance and ownership, and the land has a seat at the table.</p>
        </li>
        <li>
          <Image filename="what_is/what_is_scope_32x.png" alt="" />
          <h2>Re-Creating the Commons</h2>
          <p>We share resources, starting simply with things we already have like spaces, tools, books, and technology subscriptions.</p>
          <p>A few of us already practice financial solidarity, and soon we will begin to pool money for group purchasing decisions, such as a coworking space, and group insurance.</p>
          <p>We plan to expand our experiments in financial solidarity by creating a loan pool, insurance pool, and basic income for our community.</p>
          <p>We aim to co-buy land in a few years, so that we can deepen our exploration of the commons by living in landed community.</p>
          <p>One day, post currency, all resources will be shared and distributed where they are needed when they are needed.</p>
        </li>
      </ul>
    </Panel>
    <Panel>
      <Headline
        title="Our core stewardship team"
        subtitle="WE ARE GIVING FROM THE HEART" />
        <p>We are a small group of people, with a limited set of perspectives. We are building a foundation to grow on, and are trying to find the others. If you are interested in helping steward the collective, please reach out to anyone on the team and connect.</p>
        <p>We are still in the process of formalizing how stewardship works in the collective, but invite all to come and participate.</p>

        <ul>
          <li>
            <Image filename="what_is/what_is_kelly_erhart2x.jpg" alt="Kelly Erhart" />
            <h2>Kelly Erhart</h2>
            <span>kelly@terran.io</span>
            <p>Kelly’s passion for innovation and environmental stewardship has led her to devote herself to focus on areas where she sees the largest imminent threats to our planet. She is committed to reframing complex issues into solutions that foster emergence and facilitate growth for impactful technologies. She has cultivated a multidisciplinary background, with a focus in systems thinking - with experience in international event production, disaster relief project management, and commercialization of sustainable technologies and carbon capture methods. She is currently Co Founder & COO of Ecozoic Resources, a waterless biofiltration toilet company and Co Founder of Project Vesta, a project to sequester carbon dioxide by accelerating the weathering of olivine.</p>
          </li>
          <li>
            <Image filename="what_is/what_is_clare_politano2x.jpg" alt="Clare Politano" />
            <h2>Clare Politano</h2>
            <span>clare@terran.io</span>
            <p>Clare is an eco-social entrepreneur and movement artist whose mission is channeling resources to healing. She has worked in architecture, refugee resettlement, yoga, nutrition, and regenerative agriculture contributing her skills in design, communications, and software engineering. She is creating a future where humans remember our destiny as responsible stewards of the Earth, living in reciprocal partnership with the land and the more-than-human community.</p>
          </li>
          <li>
            <Image filename="what_is/what_is_tibet_sprague2x.jpg" alt="Tibet Sprague" />
            <h2>Tibet Sprague</h2>
            <span>tibet@terran.io</span>
            <p>Tibet is a communitarian since birth, a technologist for good, and a passionate evangelist of the more beautiful world our hearts know is possible. An entrepreneur since college he founded and/or lead the software teams for five startups. For seven years he helped grow the residential solar industry at One Block off the Grid, guiding the company through two acquisitions as VP of Engineering. After watching the corporate industrial complex destroy everything they had built he co-founded the Terran Collective to figure out how humans can cooperate fully at every level with each other and the earth. While building the foundations of Terran, Tibet has also worked closely with DAOstack, building the decentralized governance dApp Alchemy, and has co-created an international Community Weavers Guild. Tibet is devoting his life to be of service to his bioregion, and to working for a world where all beings can thrive!</p>
          </li>
          <li>
            <Image filename="what_is/what_is_neha_sharma2x.jpg" alt="Neha Sharma" />
            <h2>Neha Sharma</h2>
            <span>neha@terran.io</span>
            <p>Neha is committed to tapping into collective insight & foresight in order to restore & regenerate our relationship with the planet. She primarily does this through strategy work and impactful partnerships. Currently, her time goes towards energy efficiency & intelligence in the built environment, exercise facilitation for group alignment, and bridge building between disparate networks & nodes. She involves herself in many side projects and shticks to ensure that her soul is always activated. Inquiries of this season include: What will allow beings to cooperate harmoniously across scales? In conversations about building the future, how do we ensure all voices and stakeholders are represented?</p>
          </li>
          <li>
            <Image filename="what_is/what_is_aaron_brodeur2x.jpg" alt="Aaron Brodeur" />
            <h2>Aaron Brodeur</h2>
            <span>aaron@terran.io</span>
            <p>Aaron is a systems designer, artist, musician, builder and entrepreneur. His work in technology building social apps, sales systems, satellite solar design tools, distributed governance tools, nationwide activism platforms and product designs have touched millions. He is dedicated to designing systems and tools for thriving in an uncertain future.</p>
          </li>
        </ul>
    </Panel>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/whatarewedoing/">What Are We Doing?</Link>
  </Layout>
)

export default WhatIsTerranPage