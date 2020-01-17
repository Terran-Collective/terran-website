import React from "react"
import Layout from "../components/layout"
import Panel from "../components/panel"
import WatershedPanel from "../components/watershedPanel"
import Headline from "../components/headline"
import Button from "../components/button"
import Image from "../components/image"
import SEO from "../components/seo"
import collinsiaHeterophylla from "../images/home/home_collinsia_heterophylla.jpg"
import ScrollAnimation from 'react-animate-on-scroll'
import TextLoop from "react-text-loop";

let secondPanel = React.createRef()

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="homeHeroPanel">
      <Panel>
        <div className="homeHero">
          <Headline
            title="A community of care and practice"
            titleAccent="building systems and tools for a regenerative future"
            titleAccentColor="#2b80f0" />
          <p style={{
            fontFamily: 'DINPro-Light',
            lineHeight: `40px`,
            margin: `30px 0 50px`,
            width: `100%`,
          }}>We are technologists,  community organizers, entrepreneurs, activists, and artists working for the greatest good of all beings. We amplify cooperation among people working to regenerate our communities and our planet. We do this by building systems and tools that foster trust and collaboration, starting in the Bay Area bioregion.</p>
        </div>
      </Panel>
      <div className="heroPanelBg"></div>
    </div>
    <div>
      <div className="container">
        <ScrollAnimation animateIn="fadeOut" initiallyVisible={true}>
          <button className="scrollDown" onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth',
            })
          }}></button>
        </ScrollAnimation>
      </div>
      <Panel justification="center">
        <div className="twoColumnsLeftImage">
          <Image filename="home/home_erysimum_franciscanum2x.jpg" alt="Erysimum franciscanum" showCaption="true" />
        </div>
        <div className="twoColumnsRightText">
          <h3 className="superHeadline">What is Terran?</h3>
          <h1 className="headline whatIsTerran">Terran Collective is
            <div>
              <TextLoop>
                <span>a living system</span>
                <span>an experiment</span>
                <span>a community of care</span>
                <span>a community of practice</span>
                <span>a commons engine</span>
              </TextLoop>
            </div>
          </h1>
          <p>Terran Collective is a community of people who are committed to the work of healing and transformation necessary for all beings in our bioregion to have what they need to thrive.</p>
          <p>As a <strong>community of care</strong>, we support each other on our paths of personal healing and growth. As a <strong>community of practice</strong>, we help each other find our purpose and share our gifts with the world, while collaborating on projects aligned with our mission. As <strong>a commons</strong>, we collectively govern and share resources.</p>
          <p>Terran is <strong>a living system</strong>. We embrace our interdependence with the web of life, and believe that there is abundance for all on this beautiful planet.  To get there, we must re-design how humans relate to each other and the planet, learning from nature and applying the lessons of <a href="https://www.akpress.org/emergentstrategy.html" target="_blank" rel="noopener noreferrer">emergent strategy</a> - adaptation, decentralization, fractal awareness, resilience, and iterative change - to our work.</p>
          <div style={{textAlign: `center`}}>
            <Button label="About Terran" link="/what-is-terran/"/>
          </div>
        </div>
      </Panel>
      <div className="threeColumns whatWereDoing">
        <Panel justification="space-between" bleed="true">
          <img className="collinsiaHeterophylla leftImage" src={collinsiaHeterophylla} alt="Collinsia heterophylla" />
          <div className="threeColumnsCenterText">
            <Headline
              title="Building systems and tools that foster trust and collaboration"
              subtitle="What are we doing?"
              justification="center" />
            <ul className="cardList">
              <li>
                <strong>Storytelling for cultural evolution</strong>
                How do we shift cultural narratives and share a new story in a way that resonates with different communities? Terran creates hopeful and inspiring content, memes, media, and events, in order to build a movement which aligns us around a new shared purpose for human civilization -- creating a world that works for all.
                <div className="centerText"><Button link="/what-are-we-doing/#storytelling" label="How we build movements" /></div>
              </li>
              <li>
                <strong>Community weaving</strong>
                Strong communities can develop resilience amidst rapid change, heal and regenerate the land we live on, and step into solidarity, equity and abundance together. Terran builds community by hosting regular gatherings both small and large throughout the year, as well as weaving connections between aligned people and organizations. All to create deeper, stronger, relationships based on trust.
                <div className="centerText"><Button link="/what-are-we-doing/#community-weaving" label="How we weave community" /></div>
              </li>
              <li>
                <strong>Technology for thriving</strong>
                The tools to coordinate at scale, without coercion or rent-seeking, do not yet exist. We design software that serves human thriving by supporting community building, collaborative sensemaking, cooperative decision making, and group coordination.
                <div className="centerText"><Button link="/what-are-we-doing/#technology-for-thriving" label="Technology in service to life" /></div>
              </li>
              <li>
                <strong>Collaborative ecosystem mapping</strong>
                We believe that mapping resource flows will allow our communities to deepen relationships and allow stakeholders make more informed and equitable collective decisions. These maps will be collaboratively developed and shared publicly so that we can experiment with more transparent ways of coordination.
                <div className="centerText"><Button link="/what-are-we-doing/#collaborative-ecosystem-mapping" label="What we're mapping" /></div>
              </li>
              <li>
                <strong>Regenerating the commons</strong>
                Our land, our resources, and our communities are a commons. Rebuilding the commons worldview and our ability to collectively govern is the core of our theory of change. We are designing and experimenting with decentralized governance structures, <a href="https://sacred-economics.com/" target="_blank" rel="noopener noreferrer">gift economics</a> and the creation of modern guilds.
                <div className="centerText"><Button link="/what-are-we-doing/#regenerating-the-commons" label="Our approach to coordination" /></div>
              </li>
            </ul>
          </div>
          <img className="collinsiaHeterophylla rightImage" src={collinsiaHeterophylla} alt="Collinsia heterophylla" />
        </Panel>
      </div>
      <Panel justification="center">
        <div className="twoColumnsLeftText">
          <Headline
            title="Our bioregion is where we practice and experiment"
            subtitle="Where do we practice?"
            justification="left" />
          <p>A bioregion is a geographical and cultural area defined by the emergent boundaries expressed by nature. This is the scale at which we work; building systems and tools that are grounded in place. The economic, ecological and social landscapes that we seek to improve are those of the land we inhabit, the San Francisco Bay Area bioregion.</p>
          <p>In the initial phase of our work, we are identifying the variables and components of a thriving bioregion. We are using what we learn to build tools that enable collective intelligence for bioregions everywhere. By sharing our findings, we hope to activate bioregions around the globe, create a coherent network of place-based collaborators, and actualize a thriving biosphere.</p>
          <div style={{textAlign: `center`}}>
            <Button label="Why the bioregion?" link="/bioregion/"/>
          </div>
        </div>
        <div className="twoColumnsRightImage">
          <Image filename="home/home_sylvagus_bachmani2x.jpg" alt="Sylvagus bachmani" showCaption="true" />
        </div>
      </Panel>
      <Panel justification="center">
        <div className="twoColumnsLeftImage">
          <Image filename="home/community_and_resources.png" alt="Photos from Cospiracy" showCaption="true" />
        </div>
        <div className="twoColumnsRightText">
          <Headline
            title="Our Community"
            subtitle="What inspires us?"
            justification="left" />
          <p>Core to everything we believe and do is the importance of rebuilding community. In community we truly experience our interdependence, abundance and the agency to choose the world we want to live in. We are committed to the work of weaving together our Bay Area regenerative communities, deepening trust, building bridges, healing relationships and creating a strong, resilient network of interconnection.</p>
          <p>Our Terran community here in the Bay Area is incredible, and growing every day. We are always looking for more allies! Please join the conversation and subscribe to our calendar of events. While we are currently focused on building community  locally in the Bay Area, we want to connect with and learn from allies across the globe, and as we discover new systems, tools, and practices, we will share them with the world.</p>
          <div style={{textAlign: `center`}}>
            <Button label="Our Community" link="/community/"/>
            <Button label="Library of Resources" link="/resources/"/>
          </div>
        </div>
      </Panel>
      <WatershedPanel></WatershedPanel>
    </div>
  </Layout>
)

export default IndexPage


// <div style={{textAlign: `center`}}>
//   <Button label="What is Terran?" link="/what-is-terran/"/>
//   <Button label="What are we doing?" link="/what-are-we-doing/"/>
//   <Button label="Participate" link="/watershed/"/>
// </div>

// <div className="centerText whatWeDoBtn">
//   <Button label="More about what we do" link="/what-are-we-doing/"/>
// </div>
