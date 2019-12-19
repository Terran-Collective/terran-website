import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Panel from "../components/panel"
import Headline from "../components/headline"
import Button from "../components/button"
import Image from "../components/image"
import SEO from "../components/seo"
import rubusSpectabilis from "../images/bioregion/bioregion_rubus_spectabilis.jpg"

const bioregion = () => (
  <Layout>
    <div className="heroPanel bioregionHero">
      <Panel justification="center">
        <div className="pageHero">
          <Headline
            title="Bioregions are the emergent boundaries expressed by nature"
            subtitle="Why focus on a bioregion?"
          />
          <p>We embrace the frame of the bioregion: that we are inhabitants of a more-than-human community in partnership with the landscape we live on. We are inspired by the indigenous communities who throughout time identified themselves by their local mountain, the nearest river, and the animals and plants they count as kin. We bow in gratitude to the visionaries of the bioregionalism movement, including Peter Berg and Gary Snyder, who named these ideas and shaped language to convey ancient values in a way that modern minds can understand. </p>
        </div>
      </Panel>
      <div className="heroPanelBg"></div>
    </div>

    <Panel justification="center">
      <div className="twoColumnsLeftImage">
        <Image filename="bioregion/bioregion_aphelocoma_californica2x.jpg" alt="Aphelocoma Californica" />
        <span>Aphelocoma californica</span>
      </div>
      <div className="twoColumnsRightText">
        <Headline
          title="We belong to the land we inhabit"
        />
        <p>Bioregionalism invites us to remember our ecological identity, grounded in the functional landscape that the Earth herself expresses. The landscape is our partner-a living, intelligent participant in regeneration-and the gift and invitation is to listen to the Earth and re-organize human society in a way that includes the more-than-human world.</p>
        <p>We belong to the land. We are called to know the plants and animals that make their home alongside us. This is the land that is ours to heal. The world is alive and is always speaking to us. Only by nurturing our personal familiarity with our own bioregion can we hear what the land is asking for. </p>
      </div>
    </Panel>

    <Panel justification="center">
      <div className="twoColumnsLeftText">
        <Headline
          title="The world we are called to help is right outside our door"
        />
        <p>We believe in place-based organizing because the world we are building depends upon people in each bioregion learning to unite as the people of one landscape and coordinate action to care for the land upon which they all equally depend. A biosphere made up of coherent, collectively-governed bioregions unlocks planetary regeneration.</p>
        <p>We define the Bay Area bioregion broadly, as the 9 county area and the confluence of the watersheds between them. Drawing a strict boundary is less important than understanding the rich cultural, economic, agricultural, and environmental exchange across this influential area. We are members of Cascadia bioregion. We are constituents of the nature-state of Salmon Nation. We are the people of the redwoods, of blackberries, of the redtail hawk, the black-tailed deer, the coyote, the raven. Our invitation is to fall in love with our land. We want to shape our bioregion into a model for the world of what regenerative civilization can be.</p>
      </div>
      <div className="twoColumnsRightImage">
        <Image filename="bioregion/bioregion_nemophila_menziesii2x.jpg" alt="Nemophilia Menziesii" />
        <span>Nemophilia Menziesii</span>
      </div>
    </Panel>

    <Panel>
      <div className="singleColumnImage">
        <Image filename="bioregion/bioregion_felis_concolor2x.jpg" alt="Felis concolor" />
        <span>Felis concolor</span>
      </div>
    </Panel>
    <div className="threeColumns nativeLand">
      <Panel justification="space-between" bleed="true">
        <img className="rubusSpectabilis leftImage" src={rubusSpectabilis} alt="Rubus spectabilis" />
        <div className="threeColumnsCenterText">
          <Headline
            title="We live on native land"
          />
          <p>The place we call “The Bioregion”, the place most of us call home, is the ancestral home of many peoples. The Ramaytush Ohlone, Amah Mutsun, Bay Miwok, Coast Miwok, Delta Yokuts, Patwin and Wappo people are some of the names of the people of this land. All of those people were displaced by colonization which devastated culture & language, broke families, and interrupted unknown thousands of years of thriving in the bay. The people of this land achieved a type of harmony with the environment that is currently beyond our own capabilities. Under their care, the bioregion thrived, the water flowed as it wished, the creatures roamed as they pleased, redwoods stood tall, and the salmon ran free. The Association of Ramaytush Ohlone people and Amah Mutsun Tribal band are just two of many active communities today committed to land stewardship and honoring truth in history.</p>
          <p>As we work to bring our modern technology, culture, economies and infrastructure into right relationship with the land, remember that the people of this land are separated from their homes and their sacred places are occupied by outsiders. Whatever solutions we imagine must account for this deep injustice and be developed under the leadership of and in partnership with original peoples.</p>
        </div>
        <img className="rubusSpectabilis rightImage" src={rubusSpectabilis} alt="Rubus spectabilis" />
      </Panel>
    </div>
  </Layout>

)

export default bioregion
