import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Panel from "../components/panel"
import WatershedPanel from "../components/watershedPanel"
import Headline from "../components/headline"
import rubusSpectabilis from "../images/bioregion/bioregion_rubus_spectabilis.jpg"

const BioregionPage = () => (
  <Layout>
    <div className="heroPanel bioregionHero">
      <Panel justification="center">
        <div className="pageHero">
          <Headline
            title="Bioregions are the emergent membranes expressed by nature"
            subtitle="Place-based organizing"
          />
          <p>We are inhabitants of a more-than-human community in partnership with the landscape we live on: our bioregion.</p> 
          <p>We are inspired by the indigenous communities who identify themselves by their local mountain, the nearest river, and the animals and plants they count as kin. 
            We bow in gratitude to the visionaries of the modern bioregionalism movement, including Peter Berg and Gary Snyder. 
            Remembering the bioregion reminds us that we do this work with all our relations.</p>
        </div>
      </Panel>
      <div className="heroPanelBg"></div>
    </div>

    <Panel justification="center">
      <div className="twoColumnsLeftImage">
        <figure>
          <StaticImage src="../images/bioregion/bioregion_aphelocoma_californica2x.jpg" alt="Aphelocoma Californica" />
          <figcaption>Aphelocoma Californica</figcaption>
        </figure>
      </div>
      <div className="twoColumnsRightText">
        <Headline
          title="We belong to the land we inhabit"
        />
        <p>Bioregionalism invites us to remember our ecological identity, grounded in the functional landscape that the Earth herself expresses. The landscape is our partner--a living, intelligent participant in regeneration--and the gift and invitation is to listen to the land and re-organize human society in a way that honors ecological reality.</p>
        <p>We belong to the land. We are called to know the plants and animals that make their home alongside us. The land where we live is the land that is ours to heal. The world is alive and is always speaking to us. Only by nurturing our personal familiarity with our own bioregion can we hear what the land is saying.</p>
      </div>
    </Panel>

    <Panel justification="center">
      <div className="twoColumnsLeftText">
        <Headline
          title="We stand for what we stand on"
        />
        <p>We believe in place-based organizing because the world we are building depends upon humans in each bioregion learning to unite as the people of one landscape and coordinate action to care for the land upon which we all equally depend. A biosphere made up of coherent, collectively-governed bioregions unlocks planetary regeneration.</p>
        <p>We define the California Bay Area bioregion broadly, as the 9 county area and the confluence of the watersheds between them. Drawing a strict boundary is less important than understanding the rich cultural, economic, agricultural, and environmental exchange across this influential area. We are members of Shasta bioregion. We are constituents of the nature-state of Salmon Nation. We are the people of the redwoods, of blackberries, of the redtail hawk, the black-tailed deer, the coyote, the raven. Our invitation is to fall in love with our land. We want to shape our bioregion into a model for the world of what regenerative civilization can be.</p>
      </div>
      <div className="twoColumnsRightImage">
        <figure>
          <StaticImage src="../images/bioregion/bioregion_nemophila_menziesii2x.jpg" alt="Nemophilia Menziesii" />
          <figcaption>Nemophilia Menziesii</figcaption>
        </figure>
      </div>
    </Panel>

    <Panel>
      <div className="singleColumnImage">
        <figure>
          <StaticImage src="../images/bioregion/bioregion_felis_concolor2x.jpg" alt="Felis concolor" />
          <figcaption>Felis concolor</figcaption>
        </figure>
      </div>
    </Panel>
    <div className="threeColumns nativeLand">
      <Panel justification="space-between" bleed="true">
        <img className="rubusSpectabilis leftImage" src={rubusSpectabilis} alt="Rubus spectabilis" />
        <div className="threeColumnsCenterText">
          <Headline
            title="We live on native land"
          />
          <p>The place we call “The Bioregion”, the place most of us call home, is the ancestral home of many peoples who are still here today. <strong>Ramaytush Ohlone, Amah Mutsun, Bay Miwok, Coast Miwok, Delta Yokuts, Patwin</strong> and <strong>Wappo</strong> are some of the names of the people of this land. All of those people were displaced by colonization which devastated culture &amp; language, and interrupted unknown thousands of years of thriving in the bay. The people of this land achieved a type of harmony with the environment that is currently beyond our own capabilities. Under their care, the bioregion thrived, the water flowed as it wished, the creatures roamed as they pleased, redwoods stood tall, and the salmon ran free. The Association of Ramaytush Ohlone people and Amah Mutsun Tribal band are just two of many active communities today committed to land stewardship and honoring truth in history.</p>
          <p>As we work to bring our modern technology, culture, economies and infrastructure into right relationship with the land, we remember that the people of this land are separated from their homes and their sacred places are occupied by outsiders. Whatever solutions we imagine must account for and repair this deep injustice, and be developed under the leadership of and in partnership with original peoples.</p>
        </div>
        <img className="rubusSpectabilis rightImage" src={rubusSpectabilis} alt="Rubus spectabilis" />
      </Panel>
      <Panel justification="center">
        <div className="twoColumnsLeftImage">
          <figure>
            <StaticImage src="../images/home/home_erysimum_franciscanum2x.jpg" alt="Erysimum franciscanum" />
            <figcaption>Erysimum franciscanum</figcaption>
          </figure>
        </div>
        <div className="twoColumnsRightText">
          <Headline
            title="Bioregional Collective Intelligence"
            subtitle="What We Mean"
            subtitleColor="#0080f8" />
          <p>Collective intelligence refers to how groups of people working collaboratively together make better sense of the world and smarter decisions than any one person acting alone. We live embedded in many structures for collective intelligence, for example our governments and economic systems, that are no longer serving the needs of our species or our planet.</p>
          <p>Terran is designing and practicing new and remembered models of collective intelligence that will allow us to make both smarter and wiser decisions for the whole. We fit our vision for collective intelligence to the scale of the bioregion, which is an ecologically-created polity that naturally aligns the interests of the people sharing that landscape. <strong>The bioregion is the level at which it is imperative we learn to coordinate action, collectively govern ourselves, and steward shared resources.</strong></p>
          <p>We also believe it is imperative to bring all forms of intelligence to the table to make truly wise decisions. This means including diverse viewpoints, incorporating not just knowledge and mental intelligence but also the intelligence of our hearts and bodies, our feelings and our intuitions. And we must listen to the wisdom of the living Earth and the more-than-human community with whom we share the biosphere. The more voices we hear, the better our decisions as a planetary whole will be.</p>
        </div>
      </Panel>
      <WatershedPanel/>
    </div>
  </Layout>

)

export default BioregionPage
export { Head } from "../components/page-head"
