import React from "react"

import Layout from "../components/layout"
import Panel from "../components/panel"
import Headline from "../components/headline"
import Button from "../components/button"
import Image from "../components/image"
import SEO from "../components/seo"

import aquilegiaFormosa from "../images/community/community_aquilegia_formosa.jpg"
import fbImg from "../images/icon/icon_fb.svg"
import igImg from "../images/icon/icon_ig.svg"
import emailImg from "../images/icon/icon_email.svg"

const community = () => (
  <Layout>
    <SEO title="Community" />

    <div className="heroPanel communityHero">
      <Panel justification="center">
        <div className="pageHero">
          <Headline
            title="Collaboration and coordination work better in community"
            subtitle="WHY DO WE FOCUS ON COMMUNITY?"
          />
          <p>Community is at the heart of what we are building. In order to bring about new systems for cooperation and coordination, we need new ways of being in relationship. We see community and relationships as the place to experiment with these new ways of being.</p>
          <p>You are invited to join our community, to participate in our gatherings and to collaborate in realizing a vision of a better world.</p>
          <Button link="/community/#joincommunity" label="Join our community" />
          <Button link="/community/#gatherings" label="Gather with us"/>
          <Button link="/community/#bioregional-allies" label="People and Organizations we trust" />
        </div>
      </Panel>
      <div className="heroPanelBg"></div>
    </div>

    <Panel justification="center">
      <div className="twoColumnsLeftImage">
        <Image filename="community/community_charadrius_vociferus2x.jpg" alt="Charadrius vociferus" showCaption="true" />
      </div>
      <div className="twoColumnsRightText">
        <Headline
          title="Join the conversation"
        />
        <p>If you’d like to chat with us, please <a href="https://www.facebook.com/TerranCollective/" target="_blank" rel="noopener noreferrer">join us on Facebook</a> and say hello. Join our email list for more in depth updates.</p>
        <div className="centerText communityLinks">
          <a href="https://www.facebook.com/TerranCollective/" target="_blank" rel="noopener noreferrer">
            <img src={fbImg} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/terrancollective/" target="_blank" rel="noopener noreferrer">
            <img src={igImg} alt="Instagram" />
          </a>
          <a href="http://eepurl.com/cWIga1" target="_blank" rel="noopener noreferrer">
            <img src={emailImg} alt="email" />
          </a>
        </div>
      </div>
    </Panel>

    <Panel>
      <div className="gatherings">
        <img src={aquilegiaFormosa} alt="Aquilegia formosa"/>
        <ul>
          <li>
            <h2>Gather in person</h2>
            <div>
              <p>We meet monthly in person in the Bay Area. The components of our gatherings are:</p>
              <ul>
                <li>Time to gather around a theme</li>
                <li>Time to share needs &amp; offers</li>
                <li>Time to share food and connect</li>
              </ul>
              <p>Our gatherings are open to all. We ask you to come with an open heart and sharp mind.</p>
              <p>If you are working towards a more beautiful world, we invite you to join us. We have prepared a seat for you at our table.</p>
            </div>
          </li>
          <li>
            <h2>On the internet</h2>
            <div>
              <p>Our monthly video call is a place for the members of the bioregion to come together and share resources. During our 1-1.5hr calls, we will:</p>
              <ul>
                <li>Participants share about their work</li>
                <li>Break out into groups to focus on emergent opportunities and areas of interest.</li>
                <li>Discuss a topic or theme</li>
              </ul>
              <p>All are invited, structure will change according to how many people attend.</p>
            </div>
          </li>
        </ul>
        <div className="centerText">
          <a className="calendarButton" href="https://calendar.google.com/calendar?cid=dGVycmFuLmlvX3NnczlnZjI5amlrYzE3N3A4cjUzdWFvbzJnQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20">Add our events calendar</a>
        </div>
      </div>
    </Panel>
    <Panel>
      <div className="singleColumnImage">
        <Image filename="community/community_canis_latrans2x.jpg" alt="Canis latrans" showCaption="true" />
      </div>
    </Panel>
    <Panel>
      <div className="singleColumnText" id="bioregional-allies">
        <Headline
          title="ORGANIZATIONS WE TRUST"
          subtitle="Bioregional Allies"
        />
        <p>The following is an incomplete list of organizations we see working on, experimenting with or practicing regeneration in the San Francisco Bay Area bioregion. If you are engaged in this work and not on this list, we would love to connect and understand how to amplify your work.</p>

        <ul className="smallWhiteCards">
          <li>
            <div>
              <a href="https://www.norcalresilience.org/">
                <h3>NorCal Resilience Network</h3>
                <span>The mission of the NorCal Resilience Network is to catalyze a Just Transition to an equitable and regenerative region by supporting and activating community-based and ecological solutions in Northern California.</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://www.permacultureaction.org/">
                <h3>Permaculture Action Network</h3>
                <span>Permaculture Action Network is an organization that mobilizes concert-goers and festival-attendees to come out to "Permaculture Action Days," one day events where participants take direct action to build permaculture systems in the cities where they live.</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://www.upisf.com/">
                <h3>Urban Permaculture Institute</h3>
                <span>Helping make permaculture design relevant and accessible to people living in cities for individual and community resilience.</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="http://www.bfi.org">
                <h3>BFI</h3>
                <span>The Buckminster Fuller Institute (BFI) is dedicated to catalyzing transformative solutions to complex global problems through design thinking education.</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="http://www.bioneers.org">
                <h3>Bioneers</h3>
                <span>Changing the world by changing the story with award-winning media on visionary and practical solutions for people and planet.</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://blackmountaincircle.org/">
                <h3>Black Mountain Circle</h3>
                <span>Black Mountain Circle cultivates resilience, community, and earth stewardship in perilous times. Through inspiring events and insightful conversations, we reclaim our personal and collective stories about nature and spirit.</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://evolutionleader.com/">
                <h3>Center for Evolutionary Leadership</h3>
                <span></span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://humanetech.com/">
                <h3>Center for Humane Tech</h3>
                <span>Envisions a world where technology supports our shared well-being, sense-making, democracy, and ability to tackle complex global challenges.</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://civana.org/">
                <h3>Civana</h3>
                <span>A global community committed to working together on humanity's greatest challenges.</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://info.comakery.com/">
                <h3>Comakery</h3>
                <span>We envision a future of distributed individuals pooling their talents to accelerate development of digital projects, while being fairly paid for their efforts. This is the foundation CoMakery is built from.</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://www.burnerswithoutborders.org/mission">
                <h3>Burners Without Borders</h3>
                <span>Burners Without Borders (BWB) is a grassroots, volunteer-driven, community leadership organization whose goal is to unlock the creativity of local communities to solve problems that bring about meaningful change.</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://www.gilltractfarm.org/">
                <h3>Gill Tract Farm</h3>
                <span>Collaborative community-driven research, education, and extension focused on ecological farming and food justice. UC Gill Tract Community Farm.</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="http://haight-st-commons.org/">
                <h3>Haight Street Commons</h3>
                <span>DIY Cooperative Housing in San Francisco, CA.</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://www.lifteconomy.com/">
                <h3>LIFT economy</h3>
                <span>LIFT Economy is an impact consulting firm, worker-owned cooperative, and Certified B Corporation.</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://www.pachamama.org/">
                <h3>Pachamama Alliance</h3>
                <span>The Pachamama Alliance is a not-for-profit organization that was born out of a relationship between a group of people from the modern world and the leaders of remote indigenous groups in the Amazon region of Ecuador.</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://regenerat.es/">
                <h3>Regenesis Institute</h3>
                <span>The Regenesis Institute was formed in 2018 as a nonprofit organization dedicated to providing education pathways for regenerative practitioners around the world.</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://www.permaculture-sf.org/">
                <h3>San Francisco Permaculture Guild</h3>
                <span>To support a local community of those interested in permaculture by producing educational and social events, enabling permaculture projects and providing opportunities to exchange information related to permaculture design.</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://sogoreate-landtrust.com/">
                <h3>Sogora Te Land Trust</h3>
                <span>The Sogorea Te Land Trust is an urban Indigenous women-led community organization that facilitates the return of Chochenyo and Karkin Ohlone lands in the San Francisco Bay Area to Indigenous stewardship.</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://www.thecentersf.com/">
                <h3>The Center SF</h3>
                <span>Dedicated to the collective consciousness, serving to give back to the community.</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="http://www.thriveeastbay.org/">
                <h3>Thrive East Bay</h3>
                <span>Thrive East Bay is growing meaningful community and creating a just and flourishing world for all.</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://uptimabootcamp.com/">
                <h3>Uptima Business Bootcamp</h3>
                <span>Uptima Business Bootcamp is an innovative member-owned business accelerator dedicated to providing entrepreneurs with greater access to hands-on education, resources and community to create thriving businesses.</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://weavingearth.org/">
                <h3>Weaving Earth</h3>
                <span>Weaving Earth Center for Relational Education provides nature-based education for action at the confluence of ecological, social and personal systems change.</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://wholepersoneconomy.com/">
                <h3>Whole Person Economy</h3>
                <span>WPE co-creates coherent and actionable alternatives to outdated economic ideas, works to prototype and scale new approaches, and drives resources to individuals and organizations that integrate holistic economics, finance, and business practices.</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://wildernesstorah.org/">
                <h3>Wilderness Torah</h3>
                <span>Wilderness Torah awakens and celebrates the earth-based traditions of Judaism to nourish the connections between self, community, earth, and Spirit.</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </Panel>
    <Panel>
      <div className="singleColumnText">
        <div className="hygrocybeCoccinea">
          <Image filename="community/community_hygrocybe_coccinea2x.jpg" alt="Hygrocybe coccinea" showCaption="true" />
        </div>
        <Headline
          title="Land-based communities and farms"
          subtitle="LAND PROJECTS WE TRUST"
        />
        <p>Here are a number of communities we know about practicing regeneration in big ways and small. If you have a land-based community practicing regeneration in the Bay Area, reach out to us: We want to meet you and support your work.</p>

        <ul className="smallWhiteCards">
          <li>
            <div>
              <a href="https://www.themushroom.farm/">
                <h3>The Mushroom Farm</h3>
                <span>The Mushroom Farm is a ~750 acre dream regeneration project on the California coastline.</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://www.agapolis.org/">
                <h3>Agapolis</h3>
                <span>Situated on 22 acres of land in Portola Valley, California, Agapolis is a home, community, and gathering place for people contributing to the evolution of consciousness, culture, and systems. </span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://www.canticlefarm.org/">
                <h3>Canticle Farm</h3>
                <span>Canticle Farm is an urban farm and educational center, an intentional community, and an experiment in faith-based activism, nonviolence, and restorative justice.</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://www.commonweal.org/">
                <h3>Commonweal</h3>
                <span>Today, Commonweal works in three core fields—health and healing, art and education, and environment and justice. </span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://www.cosmichoney.buzz">
                <h3>Cosmic Honey</h3>
                <span></span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://embassynetwork.com/">
                <h3>Embassy</h3>
                <span>Together, we start and support spaces that prototype new approaches to an open, creative society. These spaces are embassies of a future that is abundant, collaborative and transparent.</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a>
                <h3>Heartland</h3>
                <span></span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a>
                <h3>Landwell</h3>
                <span></span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://www.place.community/">
                <h3>PLACE for sustainable living</h3>
                <span>A volunteer-run community hub that fosters regenerative living practices through People Linking Art, Community &amp Ecology</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="http://www.riversbendretreat.org">
                <h3>Rivers Bend Retreat Center</h3>
                <span>River's Bend Retreat Center founded first as a family retreat now continues the tradition of warm hospitality for those wanting to experience country living in an exceptional natural setting. </span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://www.aletheiasprings.com/">
                <h3>Aletheia</h3>
                <span>We are Aletheia Springs, a multigenerational community stewarding and working to regenerate the land and waters of a historic 20-acre geothermal mineral springs in the heart of Sonoma Valley, Northern California </span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a>
                <h3>Wyldflower</h3>
                <span></span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </Panel>
  </Layout>

)

export default community


//
// <Panel justification="center">
//   <div className="singleColumnText">
//     <div className="megaceryleAlcyon">
//       <Image filename="community/community_megaceryle_alcyon2x.jpg" alt="Megaceryle alcyon" showCaption="true" />
//     </div>
//     <Headline
//       title="Bioregional regenerators"
//       subtitle="People we trust"
//     />
//     <p>These are some of our collective friends, acqauintances and colleagues who we respect and see actively working on some aspect of regeneration within the bioregion.</p>
//
//     <ul className="smallWhiteCards">
//       <li>
//         <h3>Relationship graph item</h3>
//       </li>
//       <li>
//         <h3>Relationship graph item</h3>
//       </li>
//       <li>
//         <h3>Relationship graph item</h3>
//       </li>
//       <li>
//         <h3>Relationship graph item</h3>
//       </li>
//       <li>
//         <h3>Relationship graph item</h3>
//       </li>
//       <li>
//         <h3>Relationship graph item</h3>
//       </li>
//     </ul>
//   </div>
// </Panel>
