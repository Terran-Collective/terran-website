import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Panel from "../components/panel"
import Headline from "../components/headline"
import Button from "../components/button"
import Image from "../components/image"

const community = () => (
  <Layout>

    <Panel>
      <div>
        <Headline
          title="Collaboration and coordination work better in community"
          subtitle="WHY DO WE FOCUS ON COMMUNITY?"
        />
        <p>Community is at the heart of what we are building. In order to bring about new systems for cooperation and coordination, we need new ways of being in relationship. We see community and relationships as the place to experiment with these new ways of being.</p>
        <p>You are invited to join our community, to participate in our gatherings and to collaborate in realizing a vision of a better world.</p>
        <Button to="#joincommunity">Join our community</Button>
        <Button to="#gatherings">Gather with us</Button>
        <Button to="#trust">People and Organizations we trust</Button>
      </div>
    </Panel>

    <Panel>
      <div>
        <Image filename="community/community_charadrius_vociferus2x.jpg" alt="Charadrius vociferus" />
        <span>Charadrius vociferus</span>
      </div>
      <div>
        <Headline
          title="Join the conversation"
        />
        <p>We’re currently coordinating on Slack. If you’d like to chat with us, please come by and say hello. We keep everyone else updated via email, Facebook and Instagram.</p>

        <Button to="#slack_invite_link">Join us on Slack</Button>
        <Button to="#fb_invite_link">
          <Image filename="icon/icon_fb.svg" alt="" />
        </Button>
        <Button to="#ig_invite_link">
          <Image filename="icon/icon_ig.svg" alt="" />
        </Button>
        <Button to="#email_invite_link">
          <Image filename="icon/icon_email.svg" alt="" />
        </Button>
      </div>
    </Panel>

    <Panel>
      <div>
        <ul>
          <li>
            <h2>Gather in person</h2>
            <div>
              <p>We meet monthly in person in the Bay Area. The components of our gatherings are:</p>
              <ul>
                <li>Time to gather around a theme</li>
                <li>Time to share needs & offers</li>
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
      </div>
    </Panel>
    <Panel>
        <Image filename="community/community_canis_latrans2x.jpg" alt="Canis latrans" />
        <span>Canis latrans</span>
    </Panel>
    <Panel>
      <div>
        <Headline
          title="ORGANIZATIONS WE TRUST"
          subtitle="Bioregional Allies"
        />
        <p>The following is an incomplete list of organizations we see working on, experimenting with or practicing regeneration in the San Francisco Bay Area bioregion. If you are engaged in this work and not on this list, we would love to connect and understand how to amplify your work.</p>

        <ul>
          <li>
            <h3>NorCal Resilience Network</h3>
            <span></span>
          </li>
          <li>
            <h3>Permaculture Action Network</h3>
            <span></span>
          </li>
          <li>
            <h3>Urban Permaculture Institute</h3>
            <span></span>
          </li>
          <li>
            <h3>BFI</h3>
            <span></span>
          </li>
          <li>
            <h3>Bioneers</h3>
            <span></span>
          </li>
          <li>
            <h3>Black Mountain Circle</h3>
            <span></span>
          </li>
          <li>
            <h3>Center for Evolutionary Leadership</h3>
            <span></span>
          </li>
          <li>
            <h3>Center for Humane Tech</h3>
            <span></span>
          </li>
          <li>
            <h3>Civana</h3>
            <span></span>
          </li>
          <li>
            <h3>Comakery</h3>
            <span></span>
          </li>
          <li>
            <h3>Burners Without Borders</h3>
            <span></span>
          </li>
          <li>
            <h3>Gill Tract Farm</h3>
            <span></span>
          </li>
          <li>
            <h3>Haight Street Commons</h3>
            <span></span>
          </li>
          <li>
            <h3>LIFT economy</h3>
            <span></span>
          </li>
          <li>
            <h3>Pachamama Alliance</h3>
            <span></span>
          </li>
          <li>
            <h3>Regenesis Institute</h3>
            <span></span>
          </li>
          <li>
            <h3>San Francisco Permaculture Guild</h3>
            <span></span>
          </li>
          <li>
            <h3>Sogora Te Land Trust</h3>
            <span></span>
          </li>
          <li>
            <h3>The Center SF</h3>
            <span></span>
          </li>
          <li>
            <h3>Thrive East Bay</h3>
            <span></span>
          </li>
          <li>
            <h3>Uptima Business Bootcamp</h3>
            <span></span>
          </li>
          <li>
            <h3>Weaving Earth</h3>
            <span></span>
          </li>
          <li>
            <h3>Whole Person Economy</h3>
            <span></span>
          </li>
          <li>
            <h3>Wilderness Torah</h3>
            <span></span>
          </li>
        </ul>
      </div>
    </Panel>
    <Panel>
      <div>
        <Image filename="community/community_hygrocybe_coccinea2x.jpg" alt="Hygrocybe coccinea" />
        <span>Hygrocybe coccinea</span>
        <Headline
          title="Land-based communities and farms"
          subtitle="LAND PROJECTS WE TRUST"
        />
        <p>Here are a number of communities we know about practicing regeneration in big ways and small. If you have a land-based community practicing regeneration in the Bay Area, reach out to us: We want to meet you and support your work.</p>

        <ul>
          <li>
            <h3>The Mushroom Farm</h3>
            <span>Just south of Pescadero a group of people are creating the future of farming</span>
          </li>
          <li>
            <h3>Agapolis</h3>
            <span>A community in the south bay supporting the future of coliving</span>
          </li>
          <li>
            <h3>Canticle Farm</h3>
            <span>A Franciscan community tearing down fences and practicing radical community and urban agriculture</span>
          </li>
          <li>
            <h3>Commonweal</h3>
            <span></span>
          </li>
          <li>
            <h3>Cosmic Honey</h3>
            <span></span>
          </li>
          <li>
            <h3>Embassy</h3>
            <span></span>
          </li>
          <li>
            <h3>Heartland</h3>
            <span></span>
          </li>
          <li>
            <h3>Landwell</h3>
            <span></span>
          </li>
          <li>
            <h3>PLACE for sustainable living</h3>
            <span></span>
          </li>
          <li>
            <h3>Rivers Bend Retreat Center</h3>
            <span></span>
          </li>
          <li>
            <h3>Aletheia</h3>
            <span></span>
          </li>
          <li>
            <h3>Wyldflower</h3>
            <span></span>
          </li>
        </ul>
      </div>
    </Panel>
    <Panel>
      <div>
        <Image filename="community/community_megaceryle_alcyon2x.jpg" alt="Megaceryle alcyon" />
        <span>Megaceryle alcyon</span>
        <Headline
          title="Bioregional regenerators"
          subtitle="People we trust"
        />
        <p>These are some of our collective friends, acqauintances and colleagues who we respect and see actively working on some aspect of regeneration within the bioregion.</p>

        <ul>
          <li>
            <h3>Relationship graph item</h3>
          </li>
          <li>
            <h3>Relationship graph item</h3>
          </li>
          <li>
            <h3>Relationship graph item</h3>
          </li>
          <li>
            <h3>Relationship graph item</h3>
          </li>
          <li>
            <h3>Relationship graph item</h3>
          </li>
          <li>
            <h3>Relationship graph item</h3>
          </li>
        </ul>
      </div>
    </Panel>


  </Layout>

)

export default community
