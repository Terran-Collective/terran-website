import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import ReactTooltip from 'react-tooltip'
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
          <p>Terran Collective's work is creating tools, systems, and practices that bring us closer together, build trust, and allow us to coordinate to care for our world. All technology encodes the worldview of its creators. What happens if we create technology in service to life?  We want to create free and open-source software for everyone, to advance the transition to a regenerative economy. We are also experimenting with cooperative human practices of coordination like decentralized governance and gift economics.</p>
          <Button link="/what-we-do/#scopes-of-practice" label="Scopes of practice" />
          <Button link="/what-we-do/#work-with-us" label="Work with us" />
          <Button link="/what-we-do/#roadmap" label="Our goals" />
        </div>
      </Panel>
      <div className="heroPanelBg"></div>
    </div>

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
        <p>We are community builders and weavers, and believe that the best way to coordinate is within the context of healthy relationships. We know that we can only move at the speed of trust, and believe that building trust takes consistent connection and showing up for each other over time.</p>
        <p>We host gatherings that foster trust and collaboration and allow participants to imagine a more beautiful future. These include campouts, dinners, trainings and councils to build community as well as bigger convenings like our recent <a href="http://terrancospiracy.com" target="_blank" rel="noopener noreferrer">Terran Cospiracy</a> to grow our collective intelligence.</p>
        <p>We also participate in and experiment with group processes, including the <a href="https://waysofcouncil.net/what-is-council/" target="_blank" rel="noopener noreferrer">Way of Council</a> and the <a href="https://workthatreconnects.org/" target="_blank" rel="noopener noreferrer">Work that Reconnects</a> for facilitating gatherings, deepening relationships, and resolving conflicts without violence. </p>
        <div>
          <h3>Current Focus</h3>
            <ul>
              <li>
                <p>We host a regular rhythm of Terran gatherings, both simple and small community ones like potlucks and larger convenings like our recent <a href="http://terrancospiracy.com">Terran Cospiracy</a>, along with regular community Zoom calls. </p>
              </li>
              <li>
                <p>We are also committed to participating in as many gatherings and days of action hosted by our bioregional partners and friends as we can.</p>
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
        <p>As technologists, software developers and designers with decades of experience, we see an opportunity for technology to increase interdependence and cooperation without coercion or manipulation.</p>
        <p>We create software tools that map relationships, resources, needs, skills and offerings, and that allow people to coordinate collective action, activating them to participate in the regeneration of the world.</p>
        <p>We're building these tools on <a href="https://www.hylo.com/" target="_blank" rel="noopener noreferrer">Hylo</a>, a coordination platform that we steward in partnership with <a href="https://holo.host/" target="_blank" rel="noopener noreferrer">Holo</a>, the makers of Holochain.</p>
        <div>
          <h3>Current Focus</h3>
            <ul>
              <li>
                <p><span>Launching new coordination features on Hylo in partnership with regenerative communities using the platform</span></p>
              </li>
              <li>
                <p><span><a href="https://medium.com/terran-collective/in-partnership-with-holo-terran-collective-is-building-hylo-the-collaboration-platform-for-a-224dd6d1be1e" target="_blank" rel="noopener noreferrer">Read the announcement about Hylo</a></span></p>
              </li>
              <li>
                <p><span>Developing our technology roadmap</span></p>
              </li>
              <li>
                <p><span>Transition Hylo to a platform cooperative, to experiment with tech commons and software utilities for all</span></p>
              </li>
            </ul>
          <h3>Current Inquiry</h3>
          <p>How can technology bring us closer together--into resilient, trust-based, land-based community? How can it support individual and group thriving, instead of driving us apart, distracting us and extracting our attention?</p>
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
        <p>To refresh our ideas of ownership and governance, we are designing and experimenting with new and remembered ways of working together, sharing resources, group decision making and how to steward commons and common pool resources.</p>
        <div>
          <h3>Current Focus</h3>
            <ul>
              <li>
                <p><span>Doing the tough but rewarding relational work required to be in deep coherence as a team</span></p>
              </li>
              <li>
                <p><span>Researching collective governance models:</span> One of the most important changes required right now is for us to learn how to make effective decisions together through collaboration and cooperation instead of competition and dominance. We are exploring governance models like Sociocracy that are dynamic, decentralized and empowering. </p>
              </li>
              <li>
                <p><span><span data-html="true" data-class="guildTooltip" data-tip="A guild is usually defined as an association of people working toward a common goal. In permaculture, a guild is a grouping of plants, trees, animals, insects, and other components that work together to help ensure their health and productivity." className="guildSeed">Seeding bioregional <a href='http://www.neverendingfood.org/b-what-is-permaculture/permaculture-guilds/' target='_blank' rel="noopener noreferrer">guilds</a></span> across many sectors:</span> We see creating modern guilds as an important way to help those already doing regenerative work in our bioregion to coordinate more effectively. These guilds will bring together everyone working in a particular field, for example agriculture, education, technology, governance, etc. into an organizational structure designed to foster collaboration amongst existing projects. Guilds will help make sure work isn’t being duplicated, information and knowledge is being shared, and resources are flowing where they are needed at the right time. We are just beginning the project of helping these guilds form, and see this as an important medium term project we can help steward. </p>
                <ReactTooltip />
              </li>
            </ul>
          <h3>Current Inquiry</h3>
          <p>How can we create models of leadership, governance and ownership that are effective and can outcompete the market, while enabling each contributor to offer their gifts fully and feel included, supported, empowered, and energized?</p>
        </div>
      </div>
    </Panel>

    <Panel justification="center" id="bioregional-coordination">
      <div className="twoColumnsLeftText">
        <Headline
          title="Bioregional coordination"
          subtitle="SCOPE OF PRACTICE"
        />
        <p>Members of Terran Collective live in Shasta bioregion (Northern California), Cascadia bioregion (PNW) and Costa Rica.</p>
        <p>We are committed to our life-places and work to weave humans, organizations, projects, and resources in the communities we are a part of.</p>
        <div>
          <h3>Current Focus</h3>
            <ul>
              <li>
                <p><span>Deepening within our <Link to="/bioregion/">bioregion</Link>:</span> We are studying the ecological and social factors relevant to our Bay Area bioregion. This includes examining the carrying capacity of local watersheds based on food production and water sources, understanding the history of the original peoples of this land and connecting with the indigenous communities present here, and determining what is needed to bring the most health and resilience to this place. </p>
              </li>
              <li>
                <p><span>Organizing Salmon Nation:</span> We recently co-hosted the 
                <a href="https://www.edgeprize.org/" target="_blank" rel="noopener noreferrer">Edge Prize</a>, 
                an initiative to find and fund innovative projects and leaders from the "Edges" of <a href="https://www.hylo.com/groups/salmon-nation" target="_blank" rel="noopener noreferrer">Salmon Nation bioregion</a>.</p>
              </li>
              <li>
                <p><span>Hosting the Bioregional Commons:</span> We host a group on Hylo for folks working on bioregional organizing to share learnings and resources with each other. 
                <a href="https://www.hylo.com/groups/bioregional-commons" target="_blank" rel="noopener noreferrer">All are welcome!</a></p>
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
                <p>Creating new holidays that help people envision what is possible and find their role in the work needed to get there. Our first version of this is <a href="https://docs.google.com/document/u/1/d/1gVs2NTvp9M34Ioe6dqMPDt9BffEn2NIBL0X9Eq65-6M/edit" target="_blank" rel="noopener noreferrer">Inheritance Day</a>, a holiday every December 12 where we imagine that we are living 150 years in the future when humanity has created paradise on earth, and we are honoring all the ancestors for the hard work they did to get us there. It’s a future seeing mix of Thanksgiving and Passover and has been really impactful since we started celebrating it in 2015. </p>
              </li>
            </ul>
          <h3>Current Inquiry</h3>
          <p>How might we use art, story, and above all, culture, to inspire worldviews that open the way to a regenerative future?</p>
        </div>
      </div>
    </Panel>

    <Panel justification="center">
      <div id="work-with-us" className="workwithus">
        <div className="centerText">
            <Headline
              title="Work with us"
              subtitle="Terran Consulting"
            />
        </div>
      </div>
    </Panel>
  </Layout>

)

export default WhatAreWeDoingPage
export { Head } from "../components/page-head"