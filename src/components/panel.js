/**
 * Panel component to hold main content blocks
 * background image is optional
 */

import React from "react"
import PropTypes from "prop-types"

const Panel = ({ children, justification, bleed }) => {

  return (
    <div class="flexPanel" style={{
      justifyContent: justification,
    }}>
        {children}
    </div>
  )
}

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  justification: PropTypes.string,
  bleed: PropTypes.string,
}

Panel.defaultProps = {
  justification: ``,
  bleed: ``,
}

export default Panel
