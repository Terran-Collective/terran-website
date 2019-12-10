/**
 * Panel component to hold main content blocks
 */

import React from "react"
import PropTypes from "prop-types"

const Panel = ({ children, justification }) => {

  return (
    <>
      <main
        style={{
          display: `flex`,
          justifyContent: justification,
          maxWidth: `100%`,
          padding: `50px 25px`,
        }}
      >
        {children}
      </main>
    </>
  )
}

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  justification: PropTypes.string.isRequired,
}

export default Panel
