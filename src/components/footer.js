import PropTypes from "prop-types"
import React from "react"
import Menu from "./menu"
import holonBlueprint from "../images/holon-blueprint.svg"

const Footer = ({ siteTitle }) => (
  <footer style={{
          backgroundColor: `rgba(25, 24, 23, 1.000)`,
        }}>
    <img src={holonBlueprint} className="holonBlueprint" alt="holon background"/>
    <Menu/>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
  logo: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
  logo: ``,
}

export default Footer
