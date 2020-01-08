import PropTypes from "prop-types"
import React from "react"

const Headline = ({ title, titleAccent, titleAccentColor, subtitle, subtitleColor, size, justification }) => (
  <div
    style={{
      textAlign: justification,
      marginBottom: `30px`,
    }}
  >
    <h3 style={{
      color: subtitleColor || `#000`,
      fontSize: `16px`,
      letterSpacing: `5px`,
      margin: `0 0 11px`,
      opacity: subtitleColor ? `80%` : `54%`,
      textTransform: `uppercase`,
    }}>
        {subtitle}
    </h3>
    <h1 className="headline"
    style={{
      fontSize: size === `normal` ? `` : `64px`,
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
  subtitleColor: PropTypes.string,
  size: PropTypes.string,
  justification: PropTypes.string,
}

Headline.defaultProps = {
  title: ``,
  titleAccent: ``,
  titleAccentColor: ``,
  subtitle: ``,
  subtitleColor: ``,
  size: `normal`,
  justification: `left`,
}

export default Headline
