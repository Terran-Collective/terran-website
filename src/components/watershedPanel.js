import React from "react"
import PropTypes from "prop-types"
import Headline from "../components/headline"
import Button from "../components/button"
import Image from "../components/image"
import ScrollAnimation from 'react-animate-on-scroll'

const Panel = ({ children, justification, bleed }) => {

  return (
    <ScrollAnimation animateIn="fadeIn">
      <div className="flexPanel centerJustify">
        <div className="twoColumnsLeftText watershed">
          <Headline
            title=""
            subtitle="How are we resourced?"
            justification="center" />
          <div style={{ width: `200px`, margin: `40px auto`}}>
            <Image filename="logos/terran_watershed_logo.png" alt="Terran Watershed" />
          </div>
          <p style={{lineHeight: `40px`}}>The Watershed is our commons, channeling the flow of resources throughout our ecosystem, and supporting Terran’s nonprofit activities such as community building and providing free coordination tools.</p>
          <div style={{textAlign: `center`}}>
            <Button label="Contribute" link="/watershed/"/>
          </div>
        </div>
        <div className="twoColumnsRightImage watershed">
          <Image filename="home/home_zalophus_californianus.jpg" alt="Zalophus californianus" showCaption="true" />
        </div>
      </div>
    </ScrollAnimation>
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
