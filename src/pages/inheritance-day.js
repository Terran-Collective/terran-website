import React from "react"
import Layout from "../components/layout"
import Panel from "../components/panel"
import WatershedPanel from "../components/watershedPanel"
import Headline from "../components/headline"
import Image from "../components/image"
import Seo from "../components/seo"
import rubusSpectabilis from "../images/bioregion/bioregion_rubus_spectabilis.jpg"

const bioregion = () => (
  <Layout>
    <Seo title="Inheritance Day" />

    <div className="heroPanel bioregionHero">
      <Panel justification="center">
        <div className="pageHero">
          <Headline
            title="Inheritance Day"
            subtitle="Storytelling for cultural evolution"
          />
          <p>It's time to once again come together to celebrate our ancestors for all that they've given us, all the hard work they put in to create the world we live in today. And by today, I mean December 12th, 2171</p>
        </div>
      </Panel>
      <div className="heroPanelBg"></div>
    </div>

    <Panel justification="center">
      <div className="twoColumnsLeftImage">
        <Image filename="bioregion/bioregion_aphelocoma_californica2x.jpg" alt="Aphelocoma Californica" showCaption="true" />
      </div>
      <div className="twoColumnsRightText">
        <Headline
          title="What are we inheriting?"
        />
        <p>We celebrate Inheritance Day annually on December 12th. On this day, we envision
          we are 150 years in the future, and humans have learned to live
         in harmony with each other and the planet. War is a thing of the past.
         The global community eliminated poverty and ensured that every person has food,
         shelter, and healthcare by focusing on thriving and abundance for all. We have learned
         how to live lightly and sustainably with the planet, there is renewable energy for all,
          and the earth's systems have been restored to a healthy balance. Women, LGBTQIA folx,
          and people of all cultures, colors and religious beliefs have equal rights and freedoms worldwide.</p>
          <p>So we sit down to dinner with our families, both birth and chosen, and celebrate these
          incredible achievements that our ancestors worked so hard for! The meal
          has a special set of courses, similar to Passover (with a dash of Thanksgiving),
          and each one honors the important historical milestones that we achieved.
          We ring a special bell at the start of each course, so we name them Bell 1,
          Bell 2, etc. and each bell has associated activities/ritual. We also use this
          dinner to reflect on our own ancestral lineage and cultural heritage that
          lead to us being alive today on this incredible mother earth.</p>
        <p>We invite you to adopt this holiday as your own. Below you will
        find our suggested plan for the ritual, including a sample menu, but feel
        free to adapt as desired! Below that is a sample invitation you could send
        out to your friends and family.</p>
      </div>
    </Panel>

    <Panel justification="center">
      <div className="twoColumnsLeftText">
        <Headline
          title="We stand for what we stand on"
        />
        <p>We believe in place-based organizing because the world we are building depends upon people in each bioregion learning to unite as the people of one landscape and coordinate action to care for the land upon which they all equally depend. A biosphere made up of coherent, collectively-governed bioregions unlocks planetary regeneration.</p>
        <p>We define the Bay Area bioregion broadly, as the 9 county area and the confluence of the watersheds between them. Drawing a strict boundary is less important than understanding the rich cultural, economic, agricultural, and environmental exchange across this influential area. We are members of Cascadia bioregion. We are constituents of the nature-state of Salmon Nation. We are the people of the redwoods, of blackberries, of the redtail hawk, the black-tailed deer, the coyote, the raven. Our invitation is to fall in love with our land. We want to shape our bioregion into a model for the world of what regenerative civilization can be.</p>
      </div>
      <div className="twoColumnsRightImage">
        <Image filename="bioregion/bioregion_nemophila_menziesii2x.jpg" alt="Nemophilia Menziesii" showCaption="true" />
      </div>
    </Panel>

    <Panel>
      <div className="singleColumnImage">
        <Image filename="bioregion/bioregion_felis_concolor2x.jpg" alt="Felis concolor" showCaption="true" />
      </div>
    </Panel>
    <div className="threeColumns nativeLand">
      <Panel justification="space-between" bleed="true">
        <img className="rubusSpectabilis leftImage" src={rubusSpectabilis} alt="Rubus spectabilis" />
        <div className="threeColumnsCenterText">
          <Headline
            title="We live on native land"
          />
          <p>The place we call “The Bioregion”, the place most of us call home, is the ancestral home of many peoples. <strong>The Ramaytush Ohlone, Amah Mutsun, Bay Miwok, Coast Miwok, Delta Yokuts, Patwin</strong> and <strong>Wappo</strong> people are some of the names of the people of this land. All of those people were displaced by colonization which devastated culture &amp; language, broke families, and interrupted unknown thousands of years of thriving in the bay. The people of this land achieved a type of harmony with the environment that is currently beyond our own capabilities. Under their care, the bioregion thrived, the water flowed as it wished, the creatures roamed as they pleased, redwoods stood tall, and the salmon ran free. The Association of Ramaytush Ohlone people and Amah Mutsun Tribal band are just two of many active communities today committed to land stewardship and honoring truth in history.</p>
          <p>As we work to bring our modern technology, culture, economies and infrastructure into right relationship with the land, remember that the people of this land are separated from their homes and their sacred places are occupied by outsiders. Whatever solutions we imagine must account for this deep injustice and be developed under the leadership of and in partnership with original peoples.</p>
        </div>
        <img className="rubusSpectabilis rightImage" src={rubusSpectabilis} alt="Rubus spectabilis" />
      </Panel>
      <Panel justification="center">
        <div className="twoColumnsLeftImage">
          <Image filename="home/home_erysimum_franciscanum2x.jpg" alt="Erysimum franciscanum" showCaption="true" />
        </div>
        <div className="twoColumnsRightText">
          <Headline
            title="Bioregional Collective Intelligence"
            subtitle="What We Mean"
            subtitleColor="#0080f8" />
          <p>Collective intelligence refers to how groups of people working collaboratively together make better sense of the world and smarter decisions than any one person. We live embedded in many structures for collective intelligence, for example our our governments and economic systems, that are no longer serving the needs of our species or our planet. Terran is designing and practicing new and remembered models of collective intelligence that will allow us to make both smarter and wiser decisions for the whole. We fit our vision for collective intelligence to the scale of the bioregion, which is an ecologically-created polity that naturally aligns the interests of the people sharing that landscape. The bioregion is the level at which it is imperative we learn to coordinate action and collectively govern ourselves.</p>
          <p>We also believe it is imperative that we bring all forms of intelligence to the table to make truly wise decisions. This means including diverse viewpoints, incorporating not just knowledge and mental intelligence but also integrating the intelligence of our hearts and bodies, our feelings and our intuitions. And we must listen to the wisdom of the living Earth and the more-than-human community with whom we share the biosphere. The more voices we hear the better our decisions as a planetary whole will be.</p>
        </div>
      </Panel>
      <WatershedPanel/>
    </div>
  </Layout>

)

export default bioregion
