import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logoWhite from "../images/logos/terran_collective_logo_white.svg"

const Menu = ({ closeMenu }) => (
  <div className="menu">
    <Link to="/">
      <div onClick={closeMenu} onKeyPress={(e) => e.key === "Enter" ? closeMenu : ''} role="button" tabIndex="0" aria-label="Close Menu">
        <img src={logoWhite} alt="Terran Collective" />
      </div>
    </Link>
    <ul>
      <li>
        <h3>
          <Link to="/about/" onClick={closeMenu}>About Terran Collective</Link>
        </h3>
        <ul>
          <li><Link to="/about/#vision" onClick={closeMenu}>Vision &amp; purpose</Link></li>
          <li><Link to="/about/#core-beliefs" onClick={closeMenu}>Core beliefs, values &amp; principles</Link></li>
          <li><Link to="/about/#how-we-relate" onClick={closeMenu}>How we relate</Link></li>
          <li><Link to="/about/#team" onClick={closeMenu}>Core stewardship team</Link></li>
          <li><Link to="/about/#our-teachers" onClick={closeMenu}>Our teachers</Link></li>
        </ul>
      </li>
      <li>
        <h3>
          <Link to="/community/" onClick={closeMenu}>Our community</Link>
        </h3>
        <ul>
          <li><Link to="/community/#join" onClick={closeMenu}>Join our community</Link></li>
          <li><Link to="/community/#gatherings" onClick={closeMenu}>Come to our gatherings</Link></li>
          <li><Link to="/community/#projects-we-trust" onClick={closeMenu}>Bioregional projects we trust</Link></li>
        </ul>
      </li>
      <li>
        <h3>
          <Link to="/watershed/" onClick={closeMenu}>Terran Watershed</Link>
        </h3>
        <ul>
          <li><Link to="/watershed/#goals" onClick={closeMenu}>Fundraising goals</Link></li>
          <li><Link to="/watershed/#stewardship" onClick={closeMenu}>How we steward resources</Link></li>
          <li><Link to="/watershed/#donate" onClick={closeMenu}>Support the Collective</Link></li>
        </ul>
      </li>
      <li>
        <h3>
          <Link to="/what-we-do/" onClick={closeMenu}>What we do</Link>
        </h3>
        <ul>
          <li><Link to="/what-we-do/#work-with-us" onClick={closeMenu}>Work with us</Link></li>
          <li><Link to="/what-we-do/#scopes-of-practice" onClick={closeMenu}>Scopes of practice</Link></li>
        </ul>
      </li>
      <li>
        <h3>
          <Link to="/bioregion/" onClick={closeMenu}>The Bioregion</Link>
        </h3>
        <ul>
          <li><Link to="/bioregion/#why-the-bioregion" onClick={closeMenu}>Why the bioregion?</Link></li>
          <li><Link to="/bioregion/#we-live-on-native-land" onClick={closeMenu}>We live on native land</Link></li>
          <li><Link to="/bioregion/#bioregional-projects" onClick={closeMenu}>Bioregional projects</Link></li>
        </ul>
      </li>
      <li>
        <h3>
          <Link to="/resources/" onClick={closeMenu}>Library of resources</Link>
        </h3>
        <ul>
          <li><Link to="/resources/#peers-and-allies" onClick={closeMenu}>Peers &amp; allies</Link></li>
          <li><Link to="/resources/#books" onClick={closeMenu}>Books &amp; articles</Link></li>
          <li><Link to="/resources/#authors-artists-teachers" onClick={closeMenu}>Authors, artists and teachers</Link></li>
        </ul>
      </li>
      <li className="menuButtonWrapper">
        <a className="button menuButton" target="_blank" rel="noopener noreferrer" href="https://medium.com/terran-collective">Writings</a>
      </li>
      <li className="menuButtonWrapper">
        <a className="button menuButton" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/TerranCollective/">Facebook Community</a>
      </li>
      <li className="menuButtonWrapper">
        <a className="button menuButton" target="_blank" rel="noopener noreferrer" href="http://eepurl.com/cWIga1">Newsletter</a>
      </li>
    </ul>
    <div className="acknowledgments">
      <p>Terran Collective is based in <a href="http://www.ramaytush.com/" target="_blank" rel="noopener noreferrer">Ramaytush Ohlone territory, in Yelamu</a>, which is called San Francisco</p>
      <p>The illustrations on this site are public domain drawings of the flora and fauna of <Link to="/bioregion" onClick={closeMenu}>this bioregion</Link></p>
      <p>Photography by <a href="https://www.instagram.com/metapattern/" target="_blank" rel="noopener noreferrer">Carson Linforth-Bowley</a>, <a href="http://www.raines.com/" target="_blank" rel="noopener noreferrer">Raines Cohen</a>, <a href="http://ben.film/" target="_blank" rel="noopener noreferrer">Benjamin Henretig</a> and <a href="mailto:neha@terran.io">Neha Sharma</a></p>
      <p>Artwork for <Link to="/watershed/" onClick={closeMenu}>Watershed</Link> and the map of the bioregion by <a href="http://www.caseycripe.com/" target="_blank" rel="noopener noreferrer">Casey Cripe</a></p>
    </div>
  </div>
)

Menu.propTypes = {
  closeMenu: PropTypes.func
}

export default Menu
