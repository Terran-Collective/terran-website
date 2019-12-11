/**
 * Panel component to hold main content blocks
 * background image is optional
 */

import React from "react"
import PropTypes from "prop-types"

const Panel = ({ children, justification, background }) => {
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
    <div
      style={{
        background: `url(${background}) center ${bgJustification} no-repeat contain`,
        display: `flex`,
        justifyContent: justification,
        maxWidth: `100%`,
        padding: `50px 25px`,
      }}>
        {children}
    </div>
  )
}

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  justification: PropTypes.string.isRequired,
  background: PropTypes.string
}

Panel.defaultProps = {
  background: ``,
}

export default Panel
