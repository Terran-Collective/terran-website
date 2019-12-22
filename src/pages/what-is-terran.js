import React from "react"
import Layout from "../components/layout"
import Panel from "../components/panel"
import Headline from "../components/headline"
import Button from "../components/button"
import Image from "../components/image"
import SEO from "../components/seo"
import missionDiagram from "../images/what_is/what_is_mission_diagram.svg"
import visionDiagram from "../images/what_is/what_is_vision_diagram.svg"
import whatIsScope1 from "../images/what_is/what_is_scope_12x.png"
import whatIsScope2 from "../images/what_is/what_is_scope_22x.png"
import whatIsScope3 from "../images/what_is/what_is_scope_32x.png"
import whatIsCore1 from "../images/what_is/what_is_core_12x.jpg"
import whatIsCore2 from "../images/what_is/what_is_core_22x.jpg"
import whatIsCore3 from "../images/what_is/what_is_core_32x.jpg"


const WhatIsTerranPage = () => (
  <Layout>
    <SEO title="What Is Terran - Who We Are" />
    <div className="heroPanel whatIsTerranHero">
      <Panel justification="center">
        <div className="pageHero">
          <Headline
            title="We are a collective of people with a common vision of a world in balance"
            subtitle="WHAT IS TERRAN?"
            subtitleColor="#0080f8"
            justification="center" />
            <p style={{
              fontFamily: 'DINPro-Light',
              lineHeight: `40px`,
              margin: `30px 0`,
              width: `100%`,
            }}>We are a small band of humans based in the Bay Area navigating towards a way of life in balance with all people and all of nature. Our collective work is to design and practice this way of life as a necessary step to bring about the more beautiful world our hearts know is possible.</p>
            <div style={{textAlign: `center`}}>
              <Button label="Vision & Mission" link="/what-is-terran/#mission" color="#0080f8" />
              <Button label="Core Beliefs" link="/what-is-terran/#core-beliefs" color="#0080f8" />
              <Button label="Stewards of the Collective" link="/what-is-terran/#team" color="#0080f8" />
            </div>
        </div>
      </Panel>
      <div className="heroPanelBg"></div>
    </div>
    <Panel justification="center">
      <div className="twoColumnsLeftImage">
        <Image filename="what_is/what_is_eschscholzia_californica.jpg" alt="Eschscholzia californica" showCaption="true" />
      </div>
      <div className="twoColumnsRightText">
        <Headline
          title="We learn from nature"
          subtitle="OVERVIEW"
          subtitleColor="#0080f8" />
          <p style={{opacity: `.7`, lineHeight: `1.5`, color: `#171615`}}>Terran Collective is a living system and we learn from nature. We embrace our interdependence with the web of life, and believe that there is abundance for all on this beautiful planet. To get there, we must re-design how humans relate to each other and the planet, applying the lessons of <a href="https://www.akpress.org/emergentstrategy.html">emergent strategy</a>: adaptation, decentralization, fractal awareness, resilience, and iterative change to our work.</p>
          <p style={{opacity: `.7`, lineHeight: `1.5`, color: `#171615`}}>Relating in these new and remembered ways provides the laboratory through which we research and experiment with co-creating bioregional collective intelligence. Ultimately, we want to help people coordinate effectively outside of the current market/state system that is extractive, corrupt and leading our civilization to existential crisis.</p>
          <p style={{opacity: `.7`, lineHeight: `1.5`, color: `#171615`}}>The current economic systems have divided us from each other and the more-than-human community, systematically turning the ways we care for each other into transactions, commodifying nature, and decimating our ability to coordinate without the coercive power of money. Our theory of change is that a regenerative civilization requires bringing trust back to our relationships, disintermediating the market from our personal lives, and embracing community as a radical way to be in solidarity and care for each other.</p>
      </div>
    </Panel>
    <Panel justification="center">
      <div class="threeColumnsCenterText">

        <Headline
          title="Bioregional Collective Intelligence"
          subtitle="What We Mean"
          subtitleColor="#0080f8" />
        <p>Collective Intelligence refers to how groups of people working collaboratively together make better sense of the world and smarter decisions than any one person. We live embedded in many structures for collective intelligence, for example our our governments and economic systems, that are no longer serving the needs of our species or our planet. Terran is designing, developing and practicing new and remembered models of collective intelligence that will allow us to make both smarter and wiser decisions for the whole. We believe that the bioregional scale is important as it is large enough to bring many diverse resources and perspectives to bear, but local enough to allow for in person communication and cooperation towards goals that are aligned by our proximity and shared relationship to this place it’s communities.</p>
        <p>We also believe it is imperative that we bring all forms of intelligence to the table to make truly wise decisions. This means being inclusive of diverse viewpoints, incorporating not just knowledge and mental intelligence but also integrating the intelligence of our hearts and bodies, our feelings and our intuitions. And the earth must have a seat at the table. The more voices we hear the better our decisions as a planetary whole will be.</p>
      </div>
    </Panel>
    <Panel justification="space-between" bleed="true">
      <div className="threeColumnsLeftImage">
        <Image filename="what_is/what_is_vaccinium_ovatum_left2x.jpg" alt="Vaccinium ovatum" showCaption="true" />
      </div>
      <div className="threeColumnsCenterText">
        <Headline
          title="All Beings Thriving"
          subtitle="WORKING TOWARDS"
          subtitleColor="#0080f8"
          justification="center"
          size="jumbo" />
        <p>Humanity is on the brink of disaster. If we continue along our current path of extracting resources from the planet to feed infinite growth in service to individual selfishness and greed we are going to destroy the ecosystems that support life on earth and most of humanity will perish. To avoid this total collapse we must unify, aligning around a shared purpose and redesigning our culture to orient towards achieving this goal. We believe this shared purpose comes from recognizing our interdependence with each other and the web of life, and choosing to create a world that works for all, thus enabling the next evolution of life on earth - a healthy planetary organism. This vision can be articulated in many ways: the Great Turning, the More Beautiful World our Hearts Know is Possible, Game B, Omni-Win, All Win… All Beings Thriving is the articulation we like best right now.</p>
        <p><strong>Why thriving</strong>? Our vision is of a world in which all beings have what they need to thrive. Not a world free of suffering or lack or death, but a world where each of us has the opportunity to live our best lives, where the abundant resources of this planet are used regeneratively and shared equitably, where every community has the tools for resilience that enable people to bounce back from hardship, and a world where the purpose of human society is to create the most health and wellbeing possible for every person, plant, animal and being on this planet.</p>
        <p>We use the phrase <strong>all beings</strong> because we believe achieving this goal requires a shift away from the anthropocentric view of the current era of civilization. This view that sees humans as separate from nature has allowed us to create extractive and life-destroying systems leading to ecological overshoot and collapse and potentially the end of human life. It is time for us to once again see our place as a part of the whole web of life, and to become responsible stewards of the land we inhabit. Thus we must offer our care to every being we are in relationship with.</p>
      </div>
      <div className="threeColumnsRightImage">
        <Image filename="what_is/what_is_vaccinium_ovatum_right2x.jpg" alt="Vaccinium ovatum" />
      </div>
    </Panel>
    <Panel justification="center">
      <div style={{ maxWidth: `95%`, width: `600px`, margin: `0 0 50px` }}>
        <Image filename="what_is/what_is_ursus_americanus_californiensis2x.jpg" alt="Ursus americanus californiensis" showCaption="true" />
      </div>
    </Panel>
    <Panel justification="center">
      <div id="mission" className="what-is-terran">
        <Headline
          title="We are building tools to reinforce healthy relationships at every level"
          subtitle="WHOLE & HEALTHY SYSTEMS"
          justification="center" />
      </div>
      <div className="terran_feature_image missionDiagram">
        <img src={missionDiagram} alt="mission diagram"/>
      </div>
    </Panel>
    <Panel justification="center">
        <div id="core-beliefs" style={{marginTop: `25px`}}>
          <Headline
            title="Our Core Beliefs"
            justification="center" />
          <p className="what-is-terran">We are a small group of people, and our core beliefs will change as we grow and include new perspectives. Some of our foundational beliefs are:</p>
        </div>
        <ul className="triad">
          <li>
            <div>
              <img src={whatIsCore1} alt="Sequoia sempervirens" />
            </div>
            <h2>Interbeing</h2>
            <p>We are all interconnected. Everything we do impacts the people, animals, plants, and the whole ecosystem around us, and likewise we are affected by the actions, health and wellbeing of every part of the planetary whole, in infinite ways we can and cannot know.</p>
          </li>
          <li>
            <div>
              <img src={whatIsCore2} alt="Vitis californica" />
            </div>
            <h2>Abundance</h2>
            <p>There is enough for all, on this incredible Spaceship Earth we call home. We have all the resources needed for all beings to have what they need to thrive on this planet, if only we commit ourselves to that goal.</p>
          </li>
          <li>
            <div>
              <img src={whatIsCore3} alt="Buteo jamaicensis" />
            </div>
            <h2>Agency</h2>
            <p>Despite the many existential crises we face as a species, there is hope! We have the ability to choose our story, to design a new path for ourselves and humanity, and to decide how we want to live together on this planet.</p>
          </li>
        </ul>
    </Panel>
    <Panel justification="center">
      <div className="terran_feature_image visionDiagram">
        <div>
        <Headline
          title="Principles, values and Vision"
        />
        <p>Terran Collective’s values & principles are a set of living agreements that will evolve over time to accommodate the diversity of voices we welcome into relationship with us. All of our efforts are informed and guided by these values.</p>
        </div>
        <img src={visionDiagram} alt="vision diagram"/>
      </div>
    </Panel>
    <Panel justification="center">
      <div style={{marginTop: `25px`}}>
        <Headline
          title="How we relate"
          justification="center" />
        <p className="what-is-terran">We practice and experiment with community technologies and individual/group techniques that foster healing, trust and collaboration.</p>
      </div>
      <ul className="triad">
        <li>
          <div>
            <img src={whatIsScope1} alt="Nick and Mom" />
          </div>
          <h2>Community of Care</h2>
          <p>We support each person as a whole human being.</p>
          <p>We consistently show up for each other in times of need.</p>
          <p>We learn and practice tools for individual and collective healing and wellbeing.</p>
          <p>We facilitate healing processes for each other, through ceremony & group councils.</p>
          <p>We mediate conflict and practice alternative, restorative justice together.</p>
        </li>
        <li>
          <div>
            <img src={whatIsScope2} alt="Kara and Gabi" />
          </div>
          <h2>Our Community of Practice</h2>
          <p>We collaborate on projects together.</p>
          <p>We empower and support each other in pursuing our purpose.</p>
          <p>We mentor and share knowledge with each other.</p>
          <p>We participate in workshops and trainings, and share what we learn with each other.</p>
          <p>We organize reading &amp; study groups.</p>
          <p>We share work opportunities and make helpful connections.</p>
          <p>We practice collective governance and ownership, and the land has a seat at the table.</p>
        </li>
        <li>
          <div>
            <img src={whatIsScope3} alt="group at Cospiracy" />
          </div>
          <h2>Re-Building the Commons</h2>
          <p>We share resources, starting simply with things we already have like spaces, tools, books, and technology subscriptions.</p>
          <p>A few of us already practice financial solidarity, and soon we will begin to pool money for group purchasing decisions, such as a coworking space, and group insurance.</p>
          <p>We plan to expand our experiments in financial solidarity by creating a loan pool, insurance pool, and basic income for our community.</p>
          <p>We aim to co-buy land in a few years, so that we can deepen our exploration of the commons by living in landed community.</p>
          <p>One day, post currency, all resources will be shared and distributed where they are needed when they are needed.</p>
        </li>
      </ul>
    </Panel>
    <Panel justification="center">
        <div id="team" className="team">
          <Headline
            title="Our core stewardship team"
            subtitle="WE ARE GIVING FROM THE HEART"
            subtitleColor="#0080f8"
            justification="center" />
          <p>We are a small group of people, with a limited set of perspectives. We are building a foundation to grow on, and are trying to find the others. If you are interested in helping steward the collective, please reach out to anyone on the team and connect.</p>
          <p>We are still in the process of formalizing how stewardship works in the collective, but invite all to come and participate.</p>
        </div>
        <ul className="team_members">
          <li>
            <div className="team_photo">
              <Image filename="what_is/what_is_kelly_erhart2x.png" alt="Kelly Erhart" />
            </div>
            <div className="team_details">
              <h2>Kelly Erhart</h2>
              <span><a href="mailto:kelly@terran.io">kelly@terran.io</a></span>
            </div>
            <p>Kelly’s passion for innovation and environmental stewardship has led her to devote herself to focus on areas where she sees the largest imminent threats to our planet. She is committed to reframing complex issues into solutions that foster emergence and facilitate growth for impactful technologies. She has cultivated a multidisciplinary background, with a focus in systems thinking - with experience in international event production, disaster relief project management, and commercialization of sustainable technologies and carbon capture methods. She is currently Co Founder &amp; COO of Ecozoic Resources, a waterless biofiltration toilet company and Co Founder of Project Vesta, a project to sequester carbon dioxide by accelerating the weathering of olivine.</p>
          </li>
          <li>
            <div className="team_photo">
              <Image filename="what_is/what_is_clare_politano2x.png" alt="Clare Politano" />
            </div>
            <div className="team_details">
              <h2>Clare Politano</h2>
              <span><a href="mailto:clare@terran.io">clare@terran.io</a></span>
            </div>
            <p>Clare is an eco-social entrepreneur and movement artist whose mission is channeling resources to healing. She has worked in architecture, refugee resettlement, yoga, nutrition, and regenerative agriculture contributing her skills in design, communications, and software engineering. She is creating a future where humans remember our destiny as responsible stewards of the Earth, living in reciprocal partnership with the land and the more-than-human community.</p>
          </li>
          <li>
            <div className="team_photo">
              <Image filename="what_is/what_is_tibet_sprague2x.png" alt="Tibet Sprague" />
            </div>
            <div className="team_details">
              <h2>Tibet Sprague</h2>
              <span><a href="mailto:tibet@terran.io">tibet@terran.io</a></span>
            </div>
            <p>Tibet is a communitarian since birth, a technologist for good, and a passionate evangelist of the more beautiful world our hearts know is possible. An entrepreneur since college he founded and/or lead the software teams for five startups. For seven years he helped grow the residential solar industry at One Block off the Grid, guiding the company through two acquisitions as VP of Engineering. After watching the corporate industrial complex destroy everything they had built he co-founded the Terran Collective to figure out how humans can cooperate fully at every level with each other and the earth. While building the foundations of Terran, Tibet has also worked closely with DAOstack, building the decentralized governance dApp Alchemy, and has co-created an international Community Weavers Guild. Tibet is devoting his life to be of service to his bioregion, and to working for a world where all beings can thrive!</p>
          </li>
          <li>
            <div className="team_photo">
              <Image filename="what_is/what_is_neha_sharma2x.png" alt="Neha Sharma" />
            </div>
            <div className="team_details">
              <h2>Neha Sharma</h2>
              <span><a href="neha@terran.io">neha@terran.io</a></span>
            </div>
            <p>Neha is committed to tapping into collective insight &amp; foresight in order to restore &amp; regenerate our relationship with the planet. She primarily does this through strategy work and impactful partnerships. Currently, her time goes towards energy efficiency & intelligence in the built environment, exercise facilitation for group alignment, and bridge building between disparate networks & nodes. She involves herself in many side projects and shticks to ensure that her soul is always activated. Inquiries of this season include: What will allow beings to cooperate harmoniously across scales? In conversations about building the future, how do we ensure all voices and stakeholders are represented?</p>
          </li>
          <li>
            <div className="team_photo">
              <Image filename="what_is/what_is_aaron_brodeur2x.png" alt="Aaron Brodeur" />
            </div>
            <div className="team_details">
              <h2>Aaron Brodeur</h2>
              <span><a href="mailto:aaron@terran.io">aaron@terran.io</a></span>
            </div>
            <p>Aaron is a systems designer, artist, musician, builder and entrepreneur. His work in technology building social apps, sales systems, satellite solar design tools, distributed governance tools, nationwide activism platforms and product designs have touched millions. He is dedicated to designing systems and tools for thriving in an uncertain future.</p>
          </li>
        </ul>
    </Panel>
  </Layout>
)

export default WhatIsTerranPage
