import React from 'react'
import PropTypes from 'prop-types'
import {css, cx} from 'emotion'
import {connect} from 'react-redux'

import {sentenceSelector} from '../redux/questions'

const sentenceClass = cx(
  'Sentence',
  css`
    font-family: 'Oswald', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  `
)

const resultClass = cx(
  'Sentence-result',
  css`
    font-size: 36px;
  `
)

const buttonClass = cx(
  'Sentence-button',
  css`
    font-family: inherit;
    border: none;
    color: #f5f5f5;
    background: rgba(220, 220, 235, 0.5);
    filter: brightness(0.8);
    padding: 7px;
    font-size: 18px;
    border-radius: 3px;
    transition: 400ms;
    width: 100px;
    margin-top: 20px;
    &:hover {
      cursor: pointer;
      filter: brightness(1);
    }
    &:focus {
      transition: none;
    }
  `
)

const mapStateToProps = (state) => ({
  sentence: sentenceSelector(state)
})

const handleButtonClick = (onButtonClick) => () => {
  onButtonClick()
}

const Sentence = ({onButtonClick, sentence}) => (
  <div className={sentenceClass}>
    <div className={resultClass}>{sentence}</div>
    <button type="button" onClick={handleButtonClick(onButtonClick)} className={buttonClass}>
      Play Again!
    </button>
  </div>
)

export default connect(mapStateToProps)(Sentence)

Sentence.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  sentence: PropTypes.string.isRequired
}
