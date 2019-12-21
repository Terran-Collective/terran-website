import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Button = ({ label, link, color }) => (
  <Link to={link}>
    <button style={{
      backgroundColor: `transparent`,
      border: `1px solid ${color}`,
      borderRadius: `21px`,
      color: color,
      fontFamily: `DINPro-Bold`,
      fontSize: `16px`,
      margin: `10px`,
      padding: `8px 20px`,
    }}>
        {label}
    </button>
  </Link>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  color: PropTypes.string,
}

Button.defaultProps = {
  color: `#252523`,
}

export default Button
