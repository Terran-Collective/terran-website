import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logos/terran_collective_logo_blue.svg"
import Menu from "./menu"
import menuToggleHamburger from "../images/icon/menu_hamburger.svg"
import menuToggleX from "../images/icon/menu_x.svg"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        margin: `0 auto`,
        padding: `20px`,
        position: `absolute`,
        width: `100%`,
        zIndex: `2`,
      }}
    >
      <h1 style={{ margin: 0, height: "35px" }}>
        <Link
          to="/"
          style={{
            color: `#2b80f0`,
            textDecoration: `none`,
          }}
        >
          <img src={logo} alt="Terran Collective" />
        </Link>
      </h1>
      <div class="menuWrapper">
        <button class="menuToggle">
            <img src={menuToggleHamburger} alt="Open menu icon" class="openMenu" />
            <img src={menuToggleX} alt="Close menu icon"class="closeMenu" />
        </button>
        <div class="menuBg"></div>
        <div class="menuContainer">
          <Menu/>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  logo: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  logo: ``,
}

export default Header
