import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logoWhite from "../images/logos/terran_collective_logo_white.svg"

const Menu = ({ siteTitle }) => (
  <div className="menu">
    <img src={logoWhite} alt="Terran Collective" />
    <ul>
      <li>
        <h3>
          <Link to="/what-is-terran/">What is Terran Collective?</Link>
        </h3>
        <ul>
          <li><Link to="/what-is-terran/#mission">Vision &amp; Mission</Link></li>
          <li><Link to="/what-is-terran/#core-beliefs">Core Beliefs</Link></li>
          <li><Link to="/what-is-terran/#team">Core Stewardship Team</Link></li>
        </ul>
      </li>
      <li>
        <h3>
          <Link to="/community/">Our community</Link>
        </h3>
        <ul>
          <li><Link to="/community/#join">Join our community</Link></li>
          <li><Link to="/community/#gatherings">Come to our gatherings</Link></li>
          <li><Link to="/community/#projects-we-trust">Bioregional projects we trust</Link></li>
        </ul>
      </li>
      <li>
        <h3>
          <Link to="/watershed/">Terran Watershed</Link>
        </h3>
        <ul>
          <li><Link to="/watershed/#goals">Fundraising Goals</Link></li>
          <li><Link to="/watershed/#stewardship">How will resources be stewarded?</Link></li>
          <li><Link to="/watershed/#donate">Support the Collective</Link></li>
        </ul>
      </li>
      <li>
        <h3>
          <Link to="/what-are-we-doing/">What are we doing?</Link>
        </h3>
        <ul>
          <li><Link to="/what-are-we-doing/#our-work">Our Work</Link></li>
          <li><Link to="/what-are-we-doing/#current-projects">Current Projects</Link></li>
          <li><Link to="/what-are-we-doing/#how-we-work">How we work</Link></li>
        </ul>
      </li>
      <li>
        <h3>
          <Link to="/bioregion/">The Bioregion</Link>
        </h3>
        <ul>
          <li><Link to="/bioregion/#why-the-bioregion">Why the bioregion?</Link></li>
          <li><Link to="/bioregion/#we-live-on-native-land">We live on native land</Link></li>
          <li><Link to="/bioregion/#bioregional-projects">Bioregional projects</Link></li>
        </ul>
      </li>
      <li>
        <h3>
          <Link to="/resources/">Library of Resources</Link>
        </h3>
        <ul>
          <li><Link to="/resources/#peers-and-allies">Peers &amp; Allies</Link></li>
          <li><Link to="/resources/#books">Books &amp; Articles</Link></li>
          <li><Link to="/resources/#authors-artists-teachers">Authors, artists and teachers</Link></li>
        </ul>
      </li>
    </ul>
    <div className="acknowledgments">
      <p>Terran Collective is based in <Link to="http://www.ramaytush.com/">Ramaytush Ohlone territory, in Yelamu</Link>, which is called San Francisco</p>
      <p>The illustrations on this site are public domain drawings of the flora and fauna of <Link to="/bioregion">this bioregion</Link></p>
      <p>Photography by <Link to="https://www.instagram.com/metapattern/">Carson Linforth-Bowley</Link>, <Link to="http://www.raines.com/">Raines Cohen</Link> and <Link to="https://www.facebook.com/neha.sharma.bookface">Neha Sharma</Link></p>
      <p>Artwork for <Link to="/watershed/">Watershed</Link> and the map of the bioregion by <Link to="http://www.caseycripe.com/">Casey Cripe</Link></p>
    </div>
  </div>
)

Menu.propTypes = {
  siteTitle: PropTypes.string,
  logo: PropTypes.string,
}

Menu.defaultProps = {
  siteTitle: ``,
  logo: ``,
}

export default Menu
