import React from 'react'
import PropTypes from 'prop-types'
import {css, cx} from 'emotion'
import {animated} from 'react-spring'

const Card = ({title, gradient, animationStyle, children}) => {
  const cardClass = cx(
    'Card',
    css`
      color: #f5f5f5;
      background: ${gradient};
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      position: absolute;
      width: 600px;
      height: 260px;
      will-change: transform, opacity;
      border-radius: 5px;
      padding: 30px 30px 40px 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (max-width: 700px) {
        width: 100%;
        padding: 20px 10px;
      }
    `
  )

  return (
    <animated.div style={animationStyle} className={cardClass}>
      <h1>{title}</h1>
      {children}
    </animated.div>
  )
}

export default Card

Card.propTypes = {
  title: PropTypes.string,
  gradient: PropTypes.string,
  animationStyle: PropTypes.shape({
    opacity: PropTypes.object,
    transform: PropTypes.object,
    zIndex: PropTypes.number
  }),
  children: PropTypes.node
}

Card.defaultProps = {
  title: '',
  gradient: '#c0392b',
  animationStyle: {},
  children: ''
}
