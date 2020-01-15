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
          <div style={{textAlign: `center`}}>
            <Button label="What is Terran?" link="/what-is-terran/"/>
            <Button label="What are we doing?" link="/what-are-we-doing/"/>
            <Button label="Participate" link="/watershed/"/>
          </div>
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
          <h3 className="superHeadline">what is Terran?</h3>
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
          <p>Terran is <strong>a living system</strong>. We embrace our interdependence with the web of life, and believe that there is abundance for all on this beautiful planet. To get there, we must re-design how humans relate to each other and the planet, applying the lessons of emergent strategy - adaptation, decentralization, fractal awareness, resilience, and iterative change - to our work.</p>
          <div style={{textAlign: `center`}}>
            <Button label="Learn More" link="/what-is-terran/"/>
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
                <strong>Community Weaving</strong>
                Rebuilding community is the core of our theory of change. Through community we can develop resilience amidst rapid change, allowing us to navigate the ecological, political, and cultural crises we face today.
                <div className="centerText"><Button link="/what-are-we-doing/#community-weaving" label="How we weave community" /></div>
              </li>
              <li>
                <strong>Technology</strong>
                We design software that serves human thriving by supporting community building, collaborative sensemaking, cooperative decision making and group coordination.
                <div className="centerText"><Button link="/what-are-we-doing/#technology-for-thriving" label="Technology in service to life" /></div>
              </li>
              <li>
                <strong>Collaborative Ecosystem Mapping</strong>
                We believe mapping resource flows our communities can deepen relationships and help us collectively manage these resources. The maps we create will be transparent and publicly available, revealing important information that is often held privately by companies and the state.
                <div className="centerText"><Button link="/what-are-we-doing/#collaborative-ecosystem-mapping" label="What we're mapping" /></div>
              </li>
              <li>
                <strong>Systems design for cooperative coordination</strong>
                We are designing, developing and experimenting with decentralized governance structures, <a href="https://sacred-economics.com/" target="_blank" rel="noopener noreferrer">gift economics</a> and the creation of modern guilds.
                <div className="centerText"><Button link="/what-are-we-doing/#cooperative-coordination" label="Our approach to coordination" /></div>
              </li>
              <li>
                <strong>Movement building and culture creation</strong>
                It's time to tell new stories of interbeing and abundance, to align us around a shared purpose for human civilization and create a world that works for all.
                <div className="centerText"><Button link="/what-are-we-doing/#movement-building" label="How we build movements" /></div>
              </li>
            </ul>
            <div className="centerText whatWeDoBtn">
              <Button label="More about what we do" link="/what-are-we-doing/"/>
            </div>
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
            title="Community & Resources"
            subtitle="What inspires us?"
            justification="left" />
          <p>Our work happens with, by and for community. We are focused locally in the Bay Area, but as we discover new systems, tools, and practices, we share them with the world. We are in relationship with a very wide range of people who are engaged in this type of work. Are you working on similar things? Please join the conversation, and check out the resources we’ve compiled.</p>
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
