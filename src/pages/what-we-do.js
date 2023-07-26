import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Panel from "../components/panel"
import Headline from "../components/headline"
import Button from "../components/button"
import Layout from "../components/layout"
import { Link } from "gatsby"

const WhatAreWeDoingPage = () => (
  <Layout>
    <div className="heroPanel whatWeDoHero">
      <Panel justification="center">
        <div className="pageHero">
          <Headline
            title="We build infrastructure for the future we wish to inhabit"
            subtitle="What we do"
          />
          <p>Terran Collective's work is creating tools, systems, and practices that bring us closer together, 
            build trust, and allow us to coordinate to care for our world.</p>
          <p>All technology encodes the worldview of its creators.<br/> 
            What happens if we create technology in service to life?</p>
          <Button link="/what-we-do/#work-with-us" label="Work with us" />
          <Button link="/what-we-do/#scopes-of-practice" label="Scopes of practice" />
        </div>
      </Panel>
      <div className="heroPanelBg"></div>
    </div>

    <Panel justification="center">
      <div id="work-with-us" className="workwithus">
        <div className="centerText">
            <div className="singleColumnText">
                <Headline
                  title="Work with us"
                  subtitle="Terran Consulting"
                />
                <p>The members of Terran Collective are a high-trust and high-talent team. 
                  When we're not fully booked working on Hylo and our various scopes of practice (below), we take on work as a creative/digital/consulting agency.</p>
                <p>These are the offerings we are excited to provide. Please reach out if you'd like to collaborate!</p>
            </div>  
              <ul className="smallWhiteCards">
                  <li>
                    <div>
                        <h3>Software Engineering</h3>
                        <span>Our world-class developers are well-versed in frontend, backend, mobile, and web3.</span>
                    </div>
                  </li>
                  <li>
                    <div>
                        <h3>UI/UX Design</h3>
                        <span>We create beautiful and functional interfaces for digital tools.</span>
                    </div>
                  </li>
                  <li>
                    <a href="https://hylozoic.gitbook.io/hylo/about/community-stewardship-support-program-csaas" target="_blank" rel="noopener noreferrer">
                      <div>
                          <h3>Online Community Management</h3>
                          <span>We offer Community-Stewardship-As-A-Service for groups on Hylo to uplevel their impact.</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div>
                        <h3>Network Strategy</h3>
                        <span>We help purpose-driven groups clarify their goals, identify a community strategy, 
                          and activate their network to achieve big change.</span>
                    </div>
                  </li>
                  <li>
                    <div>
                        <h3>Revillaging</h3>
                        <span>We offer guidance for groups on the journey to establishing intentional land-based community.</span>
                    </div>
                  </li>
                  <li>
                    <div>
                        <h3>Facilitation</h3>
                        <span>We are ProSocial-trained facilitators experienced in leading meetings, events, and group processes.</span>
                    </div>
                  </li>
                  <li>
                    <div>
                        <h3>Permaculture Design</h3>
                        <span>We are land stewards and permaculture designers who can support the journey to restore 
                          a landscape and create resilient living systems.</span>
                    </div>
                  </li>
                  <li>
                    <div>
                        <h3>Ayurveda</h3>
                        <span>We are available to nurture your health through the ancient science of Ayurveda.</span>
                    </div>
                  </li>
              </ul>
        </div>
      </div>
    </Panel>

    <Panel justification="center" id="scopes-of-practice">
      <div className="twoColumnsRightImage">
        <figure>
          <StaticImage src="../images/what_do/what_do_calypso_bulbosa2x.jpg" alt="Aquilegia formosa" />
          <figcaption>Aquilegia formosa</figcaption>
        </figure>
      </div>
      <div id="community-weaving" className="twoColumnsLeftText">
        <Headline
          title="Community Weaving"
          subtitle="SCOPE OF PRACTICE"
        />
        <p>The most successful coordination happens within the context of healthy relationships. We prioritize relationship and move at the speed of trust, knowing that building trust takes consistent connection and showing up for each other over time.</p>
        <p>We experiment with group processes, including the <a href="https://waysofcouncil.net/what-is-council/" target="_blank" rel="noopener noreferrer">Way of Council</a> and the <a href="https://workthatreconnects.org/" target="_blank" rel="noopener noreferrer">Work that Reconnects</a> for facilitating gatherings, deepening relationships, and resolving conflict.</p>
        <div>
          <h3>Current Focus</h3>
            <ul>
              <li>
                <p>We host a regular rhythm of Terran gatherings, both simple and small community ones like potlucks and larger convenings like our recent <a href="http://terrancospiracy.com">Terran Cospiracy</a>, along with regular community Zoom calls. </p>
              </li>
              <li>
                <p>Find our event calendar and all the ways you can join our community and stay connected on our <Link to="/community">Community page</Link>.</p>
              </li>
            </ul>
          <h3>Current Inquiry</h3>
          <p>How do we build bridges between the many diverse communities living in the Bay Area? How do we ensure that a plurality of voices have a seat at the table?</p>
        </div>
      </div>
    </Panel>

    <Panel justification="center" id="technology-for-thriving">
      <div className="twoColumnsLeftText">
        <Headline
          title="Technology for thriving"
          subtitle="SCOPE OF PRACTICE"
        />
        <p>As technologists, software developers, and designers with decades of experience, we see the opportunity for technology to increase interdependence and cooperation without coercion or manipulation.</p>
        <p>We create software tools that nurture a culture of stewardship and mutual support, so that purpose-driven groups can coordinate collective action to regenerate the world.</p>
        <p>We build these tools on <a href="https://www.hylo.com/" target="_blank" rel="noopener noreferrer">Hylo</a>, a community-led coordination platform that we steward in partnership with <a href="https://holo.host/" target="_blank" rel="noopener noreferrer">Holo</a>, the makers of Holochain.</p>
        <div>
          <h3>Current Focus</h3>
            <ul>
              <li>
                <p><span>Launching new coordination features on Hylo in partnership with regenerative communities using the platform</span> such as ProSocial World and Zebras Unite</p>
              </li>
              <li>
                <p><span>Collaborating with <a href="https://openteam.community/" target="_blank" rel="noopener noreferrer">OpenTEAM</a></span> to create community tools
                 for regenerative agriculture that uphold data sovereignty for farmers</p>
              </li>
              <li>
                <p><span>Transitioning Hylo to a platform cooperative, to expand the participatory stewardship of Hylo and deepen our experiment as a tech commons</span></p>
              </li>
              <li>
                <p><span>Stewarding the <a href="https://www.collaborative.tech/" target="_blank" rel="noopener noreferrer">Collaborative Technology Alliance:</a></span> CTA facilitates coordination among platform developers who are committed to building social technology that benefits both people and planet.</p>
              </li>
            </ul>
          <h3>Current Inquiry</h3>
          <p>How can technology bring us closer together--into resilient, trust-based, land-based community?</p>
        </div>
      </div>
      <div className="twoColumnsRightImage">
        <figure>
          <StaticImage src="../images/what_do/what_do_aquilegia_formosa2x.jpg" alt="Aquilegia formosa" />
          <figcaption>Aquilegia formosa</figcaption>
        </figure>
      </div>
    </Panel>

    <Panel justification="center" id="regenerating-the-commons">
      <div className="twoColumnsLeftImage">
        <figure>
          <StaticImage src="../images/what_do/what_do_meleagris_gallopavo2x.jpg" alt="Meleagris gallopavo" />
          <figcaption>Meleagris gallopavo</figcaption>
        </figure>
      </div>
      <div className="twoColumnsRightText">
        <Headline
          title="Regenerating the commons"
          subtitle="SCOPE OF PRACTICE"
        />
        <p>Our land, our resources, and our communities are a commons. How can we return to an understanding that governing our shared resources is a shared responsibility? Rebuilding the commons worldview and our ability to collectively govern is the core of our theory of change.</p>
        <p>To refresh our ideas of stewardship and governance, we design and experiment with new and remembered ways of working together, sharing resources, group decision making and how to steward common resources.</p>
        <div>
          <h3>Current Focus</h3>
            <ul>
              <li>
                <p><span>Implementing Sociocracy:</span> We have adopted Sociocracy as our model for decentralized decision making based on trust and consent.</p>
              </li>
              <li>
                <p><span>Community Staking DAO with Regen Network:</span> We are co-creating the Regen Commons as part of Regen Foundation's Community Staking DAO program. 
                The role of the csDAOs is to participate in governance of the Regen Network ecosystem and nurture a culture of stewardship and integrity.</p>
              </li>
              <li>
                <p><span>Global Thresholds and Allocations Network:</span> We participate in this <a href="https://r3dot0.medium.com/are-we-there-yet-crossing-the-threshold-into-thresholds-based-thinking-and-action-7dc4a0c3b2fc" target="_blank" rel="noopener noreferrer">r3.0 initiative</a> to support the development of economic democracy -
                a world where resources are distributed equitably and within planetary thresholds.</p>
              </li>
            </ul>
          <h3>Current Inquiry</h3>
          <p>How might we nurture models of stewardship that are effective and can outcompete the market, while enabling each contributor to be fully resourced for offering their gifts?</p>
        </div>
      </div>
    </Panel>

    <Panel justification="center" id="bioregional-coordination">
      <div className="twoColumnsLeftText">
        <Headline
          title="Bioregional coordination"
          subtitle="SCOPE OF PRACTICE"
        />
        <p>Members of Terran Collective live in Shasta bioregion (Northern California), Cascadia bioregion (PNW) and Rio Baranca bioregion (Costa Rica).</p>
        <p>We are committed to our life-places and work to weave humans, organizations, projects, and resources in the communities we are a part of.</p>
        <div>
          <h3>Current Focus</h3>
            <ul>
              <li>
                <p><span>Deepening within our <Link to="/bioregion/">bioregion</Link>:</span> We are studying the ecological and social factors relevant to our Bay Area bioregion. This includes examining the carrying capacity of local watersheds based on food production and water sources, understanding the history of the original peoples of this land and connecting with the indigenous communities present here, and determining what is needed to bring the most health and resilience to this place. </p>
              </li>
              <li>
                <p><span>Organizing Salmon Nation:</span> We recently co-hosted the <a href="https://www.edgeprize.org/" target="_blank" rel="noopener noreferrer">Edge Prize</a>, 
                an initiative to find and fund innovative projects and leaders from the "Edges" of <a href="https://www.hylo.com/groups/salmon-nation" target="_blank" rel="noopener noreferrer">Salmon Nation bioregion</a>.</p>
              </li>
              <li>
                <p><span>Hosting the Bioregional Commons:</span> We host a group on Hylo for folks working on bioregional organizing to share learnings and resources with each other. <a href="https://www.hylo.com/groups/bioregional-commons" target="_blank" rel="noopener noreferrer">All are welcome!</a></p>
              </li>
            </ul>
          <h3>Current Inquiry</h3>
          <p>How might we resource and empower local community stewards to lead at the landscape level?</p>
        </div>
      </div>
      <div className="twoColumnsRightImage">
        <figure>
          <StaticImage src="../images/what_do/what_do_calypte_anna2x.jpg" alt="Calypte anna" />
          <figcaption>Calypte anna</figcaption>
        </figure>
      </div>
    </Panel>

    <Panel justification="center" id="storytelling" >
      <div className="twoColumnsLeftImage">
        <figure>
          <StaticImage src="../images/what_do/what_do_castor_canadensis.jpg" alt="Castor canadensis" />
          <figcaption>Castor canadensis</figcaption>
        </figure>
      </div>
      <div className="twoColumnsRightText">
        <Headline
          title="Storytelling for cultural evolution"
          subtitle="SCOPE OF PRACTICE"
        />
        <p>We are storytellers, artists and writers, who know that we will not be able to accomplish our goals without deep cultural shifts. For example, mitigating climate change will require wholesale changes to our economic systems, and that will require new stories about what we value and why. </p>
        <p>Learning how to tell these stories of interbeing and abundance in a way that creates a movement and spreads far and wide is a big project. Even though we believe that at the core we need to find deep alignment, different communities will respond to different ways of expressing the same fundamental values. So we are experimenting with various messages and mediums of storytelling through blog posts, meme creation, and events of all kinds.</p>
        <div>
          <h3>Current Focus</h3>
            <ul>
              <li>
                <p>Sharing our ideas through <a href="https://medium.com/terran-collective" target="_blank" rel="noopener noreferrer">writing</a>.</p>
              </li>
              <li>
                <p>Creating new traditions that help people envision what is possible and find their role in the work needed to get there. Our first version of this is <a href="https://docs.google.com/document/u/1/d/1gVs2NTvp9M34Ioe6dqMPDt9BffEn2NIBL0X9Eq65-6M/edit" target="_blank" rel="noopener noreferrer">Inheritance Day</a>, a holiday every December 12 where we imagine that we are living 150 years in the future when humanity has created paradise on earth, and we are honoring all the ancestors for the hard work they did to get us there. It’s a mix of Thanksgiving and Passover and has been really impactful since we started celebrating it in 2015. </p>
              </li>
            </ul>
          <h3>Current Inquiry</h3>
          <p>How might we use art, story, and above all, culture, to inspire worldviews that open the way to a regenerative future?</p>
        </div>
      </div>
    </Panel>
  </Layout>

)

export default WhatAreWeDoingPage
export { Head } from "../components/page-head"