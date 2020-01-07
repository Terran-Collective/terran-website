import classnames from "classnames"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import logo from "../images/logos/terran_collective_logo_blue.svg"
import Menu from "./menu"
import menuToggleHamburger from "../images/icon/menu_hamburger.svg"
import menuToggleX from "../images/icon/menu_x.svg"

const Header = ({ siteTitle }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <div
        style={{
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
          margin: `0 auto`,
          padding: `27px`,
          position: `absolute`,
          width: `100%`,
          zIndex: `100000`,
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
        <div className={classnames({ "menuWrapper" : true, "open" : isOpen })}>
          <Link className="headerContribute" to="/watershed/">Contribute</Link>
          <button className="menuToggle" onClick={() => setOpen(!isOpen)}>
              <img src={menuToggleHamburger} alt="Open menu icon" className="openMenu" />
              <img src={menuToggleX} alt="Close menu icon"className="closeMenu" />
          </button>
          <div className="menuBg" onClick={() => setOpen(false)}></div>
          <div className="menuContainer">
            <Menu/>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  logo: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  logo: ``,
}

export default Header
