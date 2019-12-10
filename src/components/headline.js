import PropTypes from "prop-types"
import React from "react"

const Headline = ({ title, titleAccent, titleAccentColor, subtitle, size, justification }) => (
  <div
    style={{
      textAlign: justification,
    }}
  >
    <h3 style={{
      fontSize: `16px`,
      letterSpacing: `5px`,
      margin: 0,
      opacity: `54%`,
      textTransform: `uppercase`,
    }}>
        {subtitle}
    </h3>
    <h1 style={{
      fontSize: size === `normal` ? `36px` : `64px`,
      margin: 0,
      lineHeight: `46px`,
    }}>
        {title} <span style={{color: titleAccentColor}}>{titleAccent}</span>
    </h1>
  </div>
)

Headline.propTypes = {
  title: PropTypes.string.isRequired,
  titleAccent: PropTypes.string,
  titleAccentColor: PropTypes.string,
  subtitle: PropTypes.string,
  size: PropTypes.string,
  justification: PropTypes.string,
}

Headline.defaultProps = {
  title: ``,
  titleAccent: ``,
  titleAccentColor: ``,
  subtitle: ``,
  size: `normal`,
  justification: `left`,
}

export default Headline
