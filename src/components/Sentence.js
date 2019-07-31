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
    text-align: center;
    font-size: 22px;
  `
)

const buttonClass = cx(
  'Sentence-button',
  css`
    font-family: inherit;
    color: #f5f5f5;
    font-size: 18px;
    border: none;
    border-radius: 3px;
    background: rgba(220, 220, 235, 0.5);
    filter: brightness(0.8);
    padding: 7px;
    transition: 400ms;
    width: 100px;
    margin-top: 20px;
    &:hover {
      cursor: pointer;
      filter: brightness(1);
    }
    &:focus {
      transition: none;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px rgba(255, 255, 255, 0.2);
      outline: none;
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
