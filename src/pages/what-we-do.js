import React from "react"
import ReactTooltip from 'react-tooltip'
import Panel from "../components/panel"
import Headline from "../components/headline"
import Button from "../components/button"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const WhatAreWeDoingPage = () => (
  <Layout>
    <SEO title="What we do" />

    <div className="heroPanel whatWeDoHero">
      <Panel justification="center">
        <div className="pageHero">
          <Headline
            title="We are building infrastructure for the future we wish to inhabit"
            subtitle="What we do"
          />
          <p>Terran Collective’s work is creating tools, systems, and practices that bring us closer together, build trust, and allow us to coordinate bioregional decision making and collective action effectively. All technology encodes the worldview of its authors. What happens if we create technology in service to the greatest good of all beings?  We want to create free and open-source software for everyone, to advance the transition to a regenerative economy. We are also experimenting with cooperative human practices of coordination like decentralized governance and gift economics.</p>
          <Button link="/what-we-do/#scopes-of-practice" label="Scopes of Practice" />
          <Button link="/what-we-do/#roadmap" label="Roadmap" />
        </div>
      </Panel>
      <div className="heroPanelBg"></div>
    </div>

    <Panel justification="center" id="scopes-of-practice">
      <div className="twoColumnsRightImage">
        <Image filename="what_do/what_do_calypso_bulbosa2x.jpg" alt="Aquilegia formosa" showCaption="true" />
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
                <p>We are working to establish a regular rhythm of Terran gatherings, both simple and small community ones like potlucks and larger convenings like our recent <a href="http://terrancospiracy.com">Terran Cospiracy</a>, along with regular community Zoom calls. </p>
              </li>
              <li>
                <p>We are also committed to participating in as many gatherings and days of action hosted by our bioregional partners and friends as we can. </p>
              </li>
              <li>
                <p>Find our event calendar and all the ways you can join our community and stay connected on our <Link to="/community">Community page</Link>.</p>
              </li>
            </ul>
          <h3>Current Inquiry</h3>
          <p>How do we build bridges to the many diverse communities living in the Bay Area? How do we ensure that every voice has a seat at the table? How do we ensure that our work is informed by a diverse and inclusive group of people and ideas?</p>
        </div>
      </div>
    </Panel>

    <Panel justification="center" id="technology-for-thriving">
      <div className="twoColumnsLeftText">
        <Headline
          title="Technology for thriving"
          subtitle="SCOPE OF PRACTICE"
        />
        <p>We are technologists, software developers and designers with decades of experience.   We see an opportunity for technology to increase interdependence, collaboration and cooperation without coercion or manipulation.</p>
        <p>We create software tools that map relationships, resources, needs, skills and offerings, and that allow people to coordinate collective action, activating them to participate in the regeneration of the world.</p>
        <p>We aim to create tech commons and software utilities for all, not just products for those who can afford them.</p>
        <div>
          <h3>Current Focus</h3>
            <ul>
              <li>
                <p><span>Launching our core platform:</span> Announcement about this soon</p>
              </li>
              <li>
                <p><span>Developing our technology roadmap</span></p>
              </li>
            </ul>
          <h3>Current Inquiry</h3>
          <p>How can technology bring us closer together, into real, trust-based, local community? How can it  support individual and group thriving, instead of driving us apart, distracting us and being used primarily to steal our attention and sell us things?</p>
        </div>
      </div>
      <div className="twoColumnsRightImage">
        <Image filename="what_do/what_do_aquilegia_formosa2x.jpg" alt="Aquilegia formosa" showCaption="true" />
      </div>
    </Panel>

    <Panel justification="center" id="regenerating-the-commons">
      <div className="twoColumnsLeftImage">
        <Image filename="what_do/what_do_meleagris_gallopavo2x.jpg" alt="Meleagris gallopavo" showCaption="true" />
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
                <p><span>Researching collective governance models:</span> One of the most important changes required right now is for us to learn how to make effective decisions together through collaboration and cooperation instead of competition and dominance. We are exploring governance models like Sociocracy that are dynamic, decentralized and empowering. </p>
              </li>
              <li>
                <p><span><span data-html="true" data-class="guildTooltip" data-tip="A guild is usually defined as an association of people working toward a common goal. In permaculture, a guild is a grouping of plants, trees, animals, insects, and other components that work together to help ensure their health and productivity." className="guildSeed">Seeding bioregional <a href='http://www.neverendingfood.org/b-what-is-permaculture/permaculture-guilds/' target='_blank' rel="noopener noreferrer">guilds</a></span> across many sectors:</span> We see creating modern guilds as an important way to help those already doing regenerative work in our bioregion to coordinate more effectively. These guilds will bring together everyone working in a particular field, for example agriculture, education, technology, governance, etc. into an organizational structure designed to foster collaboration amongst existing projects. Guilds will help make sure work isn’t being duplicated, information and knowledge is being shared, and resources are flowing where they are needed at the right time. We are just beginning the project of helping these guilds form, and see this as an important medium term project we can help steward. </p>
                <ReactTooltip />
              </li>
            </ul>
          <h3>Current Inquiry</h3>
          <p>How can we create models of leadership, governance and ownership that are effective and can outcompete the market, while enabling each contributor to offer their gifts fully and feel included, supported, empowered, and energized to do the work required? </p>
        </div>
      </div>
    </Panel>

    <Panel justification="center" id="collaborative-ecosystem-mapping">
      <div className="twoColumnsLeftText">
        <Headline
          title="Collaborative ecosystem mapping"
          subtitle="SCOPE OF PRACTICE"
        />
        <p>We are connectors and weavers that believe in the power of transparency and shared maps to help us collectively navigate the space and time we inhabit. Those who own the maps have the power to dictate where we go and at this moment the most important maps are social/network graphs that are owned by big tech companies like Facebook and Google and used to manipulate, abuse and sell us things. </p>
        <p>We create collaborative maps of our ecosystems, the people, organizations, projects, resources, skills, and needs of communities we are a part of. We are particularly focusing on bioregional scale mapping that will allow people anywhere to actively participate in the stewardship of the land and communities around them.</p>
        <div>
          <h3>Current Focus</h3>
            <ul>
              <li>
                <p><span>Researching our <Link to="/bioregion/">bioregion</Link>:</span> We are studying the ecological and social factors relevant to our Bay Area bioregion. This includes examining the carrying capacity of local watersheds based on food production and water sources, understanding the history of the original peoples of this land and connecting with the indigenous communities still present here, and determining what is needed to bring the most health and resilience to this place. </p>
              </li>
              <li>
                <p><span>Identifying Regenerative Players:</span> We seek the key regenerators in our bioregion to build relationships and partnerships with, and to understand their needs. We have a plan for the tools we believe are needed, but we’ll start building those that are most important to our partners in this bioregion.</p>
              </li>
              <li>
                <p><span>Prototyping a relationship graph:</span> We collectively maintain a database of our relationships with friends and allies in our bioregion and beyond. We utilize this tool to help us decide which relationships to prioritize, who to invite to our events, and where bridges need to be built.</p>
              </li>
            </ul>
          <h3>Current Inquiry</h3>
          <p>How can transparently mapping resources and relationships across a bioregion generate stronger bonds, build accountability, and accelerate regeneration?</p>
        </div>
      </div>
      <div className="twoColumnsRightImage">
        <Image filename="what_do/what_do_calypte_anna2x.jpg" alt="Calypte anna" showCaption="true" />
      </div>
    </Panel>

    <Panel justification="center" id="storytelling" >
      <div className="twoColumnsLeftImage">
        <Image filename="what_do/what_do_castor_canadensis.jpg" alt="Castor canadensis" showCaption="true" />
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
          <p>Is All Beings Thriving a story that will resonate with others enough? Is it too utopian? How can we tell stories that are inclusive and inspiring and unifying all at the same time?</p>
        </div>
      </div>
    </Panel>

    <Panel justification="center">
      <div id="roadmap" className="roadmap">
        <div className="centerText">
          <Headline
            title="How we want to grow"
            subtitle="2020-2022"
          />
        </div>
        <div className="timelineGroup">
          <div className="timeline">
            <div className="timelinePin"></div>
          </div>
          <div className="twoColumnsTimelineLeft">
            <Headline
              title="Gathering resources, mapping the bioregion and building our network of collaborators"
              subtitle="WINTER 2020"
            />
            <Image filename="what_do/what_do_adrea_alba.jpg" alt="Adrea alba" showCaption="true" />
          </div>
          <div className="twoColumnsTimelineRight">
            <div className="timelineItem">
              <span>COMMUNITY</span>
              <ul>
                <li>Continue growing and deepening the Terran community and network through monthly gatherings and Zoom calls.</li>
                <li>Grow stewardship team</li>
                <li>1 day of direct action per season.</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>WATERSHED</span>
              <ul>
                <li>Fill the Terran Watershed so we are resourced for at least the next year, ideally in an ongoing (monthly contribution) way so we don’t have to keep spending lots of time fundraising. </li>
                <li>Share our tranpsarent budget and operations model so that we can receive resources to support our work. Create an ecosystem that allows us to do our best work as a gift to the bioregion, and ultimately the biosphere. Our initial goal is to feel comfortably resourced for 12 months, We hope to explore [new paradigm] resource models.</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>TECHNOLOGY</span>
              <ul>
                <li>Develop & release technological roadmap in partnership with bioregional allies. </li>
                <li>Announce core platform</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>BIOREGION</span>
              <ul>
                <li>Identify 5-10 actors in the bioregion and interview them to understand their needs and offerings, and how we can best collaborate. </li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>GUILDS</span>
              <ul>
                <li>Nurture development of three initial bioregional Guilds & identify tools needed to help them</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>GOVERNANCE & OWNERSHIP</span>
              <ul>
                <li>Finalize and share initial membership model for Terran Collective.</li>
                <li>Develop and utilize systems for transparent finances.</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>MEDIA</span>
              <ul>
                <li>Publishing at least 1 article per month on bioregionalism, community weaving, tech for human thriving...</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>REVILLAGING</span>
              <ul>
                <li>Learn from & map bioregional land projects</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="timelineGroup">
          <div className="timeline">
            <div className="timelinePin"></div>
          </div>
          <div className="twoColumnsTimelineLeft">
            <div className="timelineItem">
              <span>COMMUNITY</span>
              <ul>
                <li>Develop structure and templates for our ongoing events and gatherings, both in person and on-line</li>
                <li>Third annual Terran Camp!</li>
                <li>Grow stewardship team</li>
                <li>Develop advisory councils</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>WATERSHED</span>
              <ul>
                <li>Continue fundraising until we have a year of water in the well.</li>
                <li>Release first seasonal report on our resource usage/management.</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>TECHNOLOGY</span>
              <ul>
                <li>Develop regenerative business model for our tools and services</li>
                <li>Start using our technology to improve collaboration and cooperation amongst the regenerative community of the Bay Area. </li>
                <li>Conduct user experience research and testing of our designs</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>BIOREGION</span>
              <ul>
                <li>Continue working with partners to run in-person research.</li>
                <li>Explore how the technology we are building can help with bioregional ecosystem mapping.</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>GUILDS</span>
              <ul>
                <li>Work with guilds to map their landscape</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>GOVERNANCE & OWNERSHIP</span>
              <ul>
                <li>Release model for collective ownership & governance of our collective and the technology we are building, and gather feedback</li>
                <li>Implement collective membership agreements</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>REVILLAGING</span>
              <ul>
                <li>Build relationships with bioregional land projects</li>
              </ul>
            </div>
          </div>
          <div className="twoColumnsTimelineRight">
            <Headline
              title="Grow the team, conduct research, develop technology and nurture our community, implement collective membership agreements"
              subtitle="SPRING 2020"
            />
            <Image filename="what_do/what_do_falco_sparverius.jpg" alt="Falco sparverius" showCaption="true" />
          </div>
        </div>

        <div className="timelineGroup">
          <div className="timeline">
            <div className="timelinePin"></div>
          </div>
          <div className="twoColumnsTimelineLeft">
            <Headline
              title="Implement the first iteration of our collective ownership, governance and resource sharing systems, grow the ecosystem"
              subtitle="SUMMER 2020"
            />
            <Image filename="what_do/what_do_lontra_canadensis.jpg" alt="Lontra canadensis" showCaption="true" />
          </div>
          <div className="twoColumnsTimelineRight">
            <div className="timelineItem">
              <span>COMMUNITY</span>
              <ul>
                <li>Preparing for second annual Cospiracy</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>TECHNOLOGY</span>
              <ul>
                <li>Scaling our robust tools to 5-100 of communities and organizations.</li>
                <li>Still primarily focused on bioregion</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>BIOREGION</span>
              <ul>
                <li>Continue onboarding more bioregional partners</li>
                <li>Convene bioregional Gathering</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>GUILDS</span>
              <ul>
                <li>Work with guilds to collaborate on sharing resources & offerings.</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>GOVERNANCE & OWNERSHIP</span>
              <ul>
                <li>Finalize and share initial membership model for Terran Collective.</li>
                <li>Develop and utilize systems for transparent finances.</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>MEDIA</span>
              <ul>
                <li>Begin streaming and more transparent communication</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="timelineGroup">
          <div className="timeline">
            <div className="timelinePin"></div>
          </div>
          <div className="twoColumnsTimelineLeft">
            <div className="timelineItem">
              <span>COMMUNITY</span>
              <ul>
                <li>Second annual Cospiracy</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>TECHNOLOGY</span>
              <ul>
                <li>Begin to release tech stack tools to global audiences, allow people to begin the process of mapping their own bioregion</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>BIOREGION</span>
              <ul>
                <li>Launch the bioregional regenerative map </li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>GUILDS</span>
              <ul>
                <li>Work with guilds to build tools that allow them to actively support bioregional communities and organizations as groups</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>GOVERNANCE & OWNERSHIP</span>
              <ul>
                <li>Implement collective ownership & governance system for our tech suite: Creating a technological commons shared by all</li>
              </ul>
            </div>
          </div>
          <div className="twoColumnsTimelineRight">
            <Headline
              title="Develop tools for bioregional meta-organizational collaboration via guilds and start looking for other bioregions to release our tools to"
              subtitle="FALL 2020"
            />
            <Image filename="what_do/what_do_pelicanus_occidentalis.jpg" alt="Pelicanus occidentalis" showCaption="true" />
          </div>
        </div>

        <div className="timelineGroup">
          <div className="timeline">
            <div className="timelinePin"></div>
          </div>
          <div className="twoColumnsTimelineLeft">
            <Headline
              title="Building tools that create commons, make tools that make it possible for anyone to create a collective, deepening community in the bay"
              subtitle="2021"
            />
            <Image filename="what_do/what_do_pleurotus_ostreatus.jpg" alt="Pleurotus ostreatus" showCaption="true" />
          </div>
          <div className="twoColumnsTimelineRight">
            <div className="timelineItem">
              <span>COMMUNITY</span>
              <ul>
                <li>Work with our network to coordinate large-scale actions emergent from small-scale collaboration and coordination</li>
                <li>Expand to two more large yearly events beyond Terran Camp and Cospiracy</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>TECHNOLOGY</span>
              <ul>
                <li>Develop tools that allow for other collectives to form, map, sense, choose and act</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>BIOREGION</span>
              <ul>
                <li>Bioregional handbook</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>GUILDS</span>
              <ul>
                <li>Guilds meeting regularly, tools released for guild governance and management of productive output: Creating a commons of our labors of passion and love</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>GOVERNANCE & OWNERSHIP</span>
              <ul>
                <li>Implement collective ownership and governance of the collective during an in person congress with online participation: Create a governance & ownership commons shared by all</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>REVILLAGING</span>
              <ul>
                <li>Host gathering for bioregional land projects</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="timelineGroup">
          <div className="timeline">
            <div className="timelinePin"></div>
          </div>
          <div className="twoColumnsTimelineLeft">
            <div className="timelineItem">
              <span>COMMUNITY</span>
              <ul>
                <li>We seek land to steward in the Bay Area to create regenerative and land-integrated communities. Community centers and live-in projects.</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>WATERSHED</span>
              <ul>
                <li>Fill the Terran Watershed so we are resourced for at least the next year, ideally in an ongoing (monthly contribution) way so we don’t have to keep spending lots of time fundraising. </li>
                <li>Share our tranpsarent budget and operations model so that we can receive resources to support our work. Create an ecosystem that allows us to do our best work as a gift to the bioregion, and ultimately the biosphere. Our initial goal is to feel comfortably resourced for 12 months, We hope to explore [new paradigm] resource models.</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>TECHNOLOGY</span>
              <ul>
                <li>Develop tools for local coordination: Neighborhood, city & county level - work with local stakeholders to identify deepest needs </li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>GUILDS</span>
              <ul>
                <li>Develop guild commons</li>
              </ul>
            </div>
            <div className="timelineItem">
              <span>REVILLAGING</span>
              <ul>
                <li>Begin acquiring land: Create a commons of distributed land projects, shared and stewarded by all. Community centers in various parts of the bioregion, that allow people to collaborate, meet, share space in person. Degraded land -> Reforestation. </li>
              </ul>
            </div>
          </div>
          <div className="twoColumnsTimelineRight">
            <Headline
              title="Find and secure land for collective stewardship and governance, nurture the commons we have created and release tools for local meta-communities"
              subtitle="2022"
            />
            <Image filename="what_do/what_do_sciurus_griseus.jpg" alt="Sciurus griseus" showCaption="true" />
          </div>
        </div>

      </div>
    </Panel>
  </Layout>

)

export default WhatAreWeDoingPage
