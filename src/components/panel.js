/**
 * Panel component to hold main content blocks
 * background image is optional
 */

import React from "react"
import PropTypes from "prop-types"

const Panel = ({ children, justification, background, bleed }) => {
  let bgJustification;

  switch (justification) {
    case "right":
      bgJustification = "left";
      break;
    case "left":
      bgJustification = "right";
      break;
    case "center":
      bgJustification = "center";
      break;
    default:
      bgJustification = "center";
  }

  return (
    <div class="flexPanel" style={{
      background: `url(${background}) center ${bgJustification} no-repeat contain`,
      justifyContent: justification,
    }}>
        {children}
    </div>
  )
}

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  justification: PropTypes.string,
  background: PropTypes.string,
  bleed: PropTypes.string,
}

Panel.defaultProps = {
  background: ``,
  justification: ``,
  bleed: ``,
}

export default Panel
