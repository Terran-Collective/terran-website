/**
 * Panel component to hold main content blocks
 * background image is optional
 */

import React from "react"
import PropTypes from "prop-types"
import ScrollAnimation from 'react-animate-on-scroll'

const Panel = ({ children, justification, bleed, id }) => {

  return (
    <ScrollAnimation animateIn="fadeIn">
      <div className="flexPanel" id={id} style={{
        justifyContent: justification,
      }}>
          {children}
      </div>
    </ScrollAnimation>
  )
}

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  justification: PropTypes.string,
  bleed: PropTypes.string,
  id: PropTypes.string,
}

Panel.defaultProps = {
  justification: ``,
  bleed: ``,
}

export default Panel
