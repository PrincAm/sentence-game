import React from 'react'
import PropTypes from 'prop-types'
import {css, cx} from 'emotion'
import {animated} from 'react-spring'

const cardClass = cx(
  'Card',
  css`
    color: #f5f5f5;
    background: linear-gradient(to right, #1565c0, #b92b27);
    position: absolute;
    width: 50%;
    height: 200px;
    will-change: transform, opacity;
  `
)

const Card = ({style, title, children}) => (
  <animated.div style={style} className={cardClass}>
    <h2>{title}</h2>
    {children}
  </animated.div>
)

export default Card

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

Card.defaultProps = {
  title: '',
  children: ''
}
